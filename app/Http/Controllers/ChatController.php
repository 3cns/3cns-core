<?php

namespace App\Http\Controllers;

use App\Model\DepartmentAgentMap;
use App\Model\File;
use App\Model\MessageAgentTrack;
use App\Model\Timezone;
use App\Model\TwilioNumber;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Magyarjeti\MimeTypes\MimeTypeConverter;
use Response;
use App\Model\Widgets;
use App\Model\Users;
use App\Model\Department;
use App\Model\WidgetDepartmentMapping;
use App\Model\WidgetScheduleMapping;
use App\Model\MessageTrack;
use App\Model\ContactList;
use App\Model\MessageLog;
use App\Model\ChatThread;
use App\Model\MessageCache;
use App\Model\MessageCacheData;
use App\Model\MessageForwardCounter;
use App\Model\UserToken;
use App\Model\AgentTransferLog;
use App\Model\AgentTransferHistory;
use App\Http\Controllers\TwilioController;
use Helper;
use SebastianBergmann\Environment\Console;
use Twilio\Rest\Client;                         /* Twilio REST client */

use App\Exceptions\EntityConflictException;
use App\Exceptions\HttpBadRequestException;
use Illuminate\Database\QueryException;

class ChatController extends Controller
{
    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $audio_ext = ['mp3', 'ogg', 'mpga'];
    private $video_ext = ['mp4', 'mpeg'];
    private $document_ext = ['doc', 'docx', 'pdf', 'odt'];

    /**
     * function to check incoming message from the mobile phone
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkMessage(Request $request)
    {
        Log::info('1 ===> message received');
        //Variable Declaration ( data recive from twilio sms webhook )
        $fromNumber = $request->From;                           //client Number
        $toNumber = substr($request->To, -10);            //widget Number
        $messageBody = $request->Body;                          //message body
        $file = false;
        $fileType = '';
        $fileUrl = '';
        $converter = new MimeTypeConverter();

        if (isset($request->NumMedia) && $request->NumMedia > 0) {
            Log::info('message has a media file');
            $file = true;
            $mediaUrl = $request->input("MediaUrl0");
            $MIMEType = $request->input("MediaContentType0");
            $fileExtension = $converter->toExtension($MIMEType);
            $mediaSid = basename($mediaUrl);
            $media = file_get_contents($mediaUrl);
            $filename = "$mediaSid.$fileExtension";
            $fileType = $this->getType($fileExtension);
            $model = new File();
            if (file_put_contents(storage_path('app/public/uploads/') . $filename, $media)) {
                Log::info('media file saved');
                $model::create([
                    'name' => $filename,
                    'type' => $fileType,
                    'extension' => $fileExtension
                ]);
                $fileUrl = url('/') . Storage::url('uploads/' . $filename);
            } else {
                $file = false;
                $fileType = '';
                $fileUrl = '';
            }
        }
        $checkTwilioNumbers = TwilioNumber::where('number', $toNumber)->with('getWidgetDetails')->first();
        if (count($checkTwilioNumbers) != 0) {

            $checkMessageTrack = MessageTrack::where('widget_id', $checkTwilioNumbers->getWidgetDetails->widget_uuid)
                ->where('from_phone_number', $fromNumber)
                ->where('status', 1)->first();
            if (count($checkMessageTrack) == 0) {
                Log::info('1 ===> process Messages');
                $this->checkMessageCache($fromNumber, $checkTwilioNumbers->getWidgetDetails->widget_uuid, $messageBody, $file, $fileType, $fileUrl);
            } else {
                Log::info('1 ===> saveOtherChat');
                $type = '1';
                $direction = '1';
                $userId = null;
                $this->saveOtherChat($fromNumber, $checkTwilioNumbers->getWidgetDetails->widget_uuid, $messageBody, $type, $direction, $userId, $file, $fileType, $fileUrl, $status = 1);
            }
        } else {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'Twilio Number Not Found !'
            ));
        }
    }

    /**
     * function to check message cache
     *
     * @param fromNumber,widgetUuid,messageBody
     * @return \Illuminate\Http\JsonResponse
     */

    public function checkMessageCache($fromNumber, $widgetUuid, $messageBody, $file, $fileType, $fileUrl)
    {
        if ($fromNumber != "" && $widgetUuid != "") {
            Log::info('2 ===> Process for mobile message');
            $checkMessageCache = MessageCache::where('from_phone_number', $fromNumber)
                ->where('widget_uuid', $widgetUuid)->first();
            $getWidgetData = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails')->first();
            if (count($checkMessageCache) != 0) {
                Log::info('2 ===> Got a data in Message cache table for the from number');
                if ($checkMessageCache->status == 1) {
                    Log::info('2 ===> check message status 1');
                    $this->checkMessageContain($messageBody, $fromNumber, $widgetUuid, $checkMessageCache->id, $file, $fileType, $fileUrl);
                } elseif ($checkMessageCache->status == 6) {
                    Log::info('2 ===> check for resolved messages');
                    if (count($getWidgetData->widgetDepartment) > 1) {
                        $this->checkResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $checkMessageCache->id, $file, $fileType, $fileUrl);
                    } else {
                        $this->checkSingleResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $checkMessageCache->id);
                    }
                    //$this->checkResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $checkMessageCache->id);
                } else {
                    Log::info('2 ===> checking the message accepted and not resolved then save to the chat thread');
                    $checkMessageTrack = MessageTrack::where('widget_id', $widgetUuid)
                        ->where('from_phone_number', $fromNumber)
                        ->whereIn('status', [2, 5])->first();

                    if (count($checkMessageTrack) != 0) {
                        if ($checkMessageTrack->status == 2) {
                            Log::info('2 ===> check message status 2');
                            $type = '1';
                            $direction = '1';
                            $userId = $checkMessageTrack->agent_id;
                            $this->saveOtherChat($fromNumber, $widgetUuid, $messageBody, $type, $direction, $userId, $file, $fileType, $fileUrl, $checkMessageTrack->status);
                        } elseif ($checkMessageTrack->status == 5) {
                            Log::info('2 ===> check message status 5');
                            $updateMessageTrack = MessageTrack::where('widget_id', $widgetUuid)
                                ->where('from_phone_number', $fromNumber)->update(['status' => 6]);
                            $updateMessageCache = MessageCache::where('from_phone_number', $fromNumber)
                                ->where('widget_uuid', $widgetUuid)->first();
                            $updateMessageCache->status = 6;
                            $updateMessageCache->update();
                            if (count($getWidgetData->widgetDepartment) > 1) {
                                $this->createSmsTemplate($fromNumber, $widgetUuid);
                                $this->checkResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $updateMessageCache->id, $file, $fileType, $fileUrl);
                            } else {
                                $responseMessageCacheData = $this->saveMessageCacheData($messageBody, $updateMessageCache->id, $file, $fileType, $fileUrl);
                                //$responseMessageCacheData = $this->saveMessageCacheData($messageBody, $updateMessageCache->id);
                                //$this->singleDepartmentChat($fromNumber, $widgetUuid, $messageBody);
                                $this->checkSingleResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $updateMessageCache->id);
                            }
                        } else {
                            Log::info('2 ===> ');
                            //$this->createSmsTemplate($fromNumber, $widgetUuid);
                            //$this->checkMessageContain($messageBody,$fromNumber,$widgetUuid,$checkMessageCache->id);
                        }
                    } else {
                        Log::info('2 ===> check message track else');
                    }
                }

            } else {
                Log::info('2 ===> number not found in MessageTrack table');
                $responseMessageCacheId = $this->saveMessageCache($fromNumber, $widgetUuid);
                if ($responseMessageCacheId != false) {

                    $responseMessageCacheData = $this->saveMessageCacheData($messageBody, $responseMessageCacheId, $file, $fileType, $fileUrl);
                    if ($responseMessageCacheData == true) {
                        $getWidgetData = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails')->first();
                        if (count($getWidgetData->widgetDepartment) > 1) {
                            $this->createSmsTemplate($fromNumber, $widgetUuid);
                        } else {
                            $this->singleDepartmentChat($fromNumber, $widgetUuid, $messageBody);
                        }
                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'response' => [],
                            'error' => true,
                            'message' => 'data Not Saved !'
                        ));
                    }

                } else {

                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'response' => [],
                        'error' => true,
                        'mcheckMessageContainessage' => 'data Not Saved !'
                    ));
                }
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'please send require data !'
            ));
        }

    }

    /**
     * function to check incoming message contain
     *
     * @param messageBody,fromNumber,widgetUuid,checkMessageCacheId
     * @return \Illuminate\Http\JsonResponse
     */

    public function checkMessageContain($messageBody, $fromNumber, $widgetUuid, $checkMessageCacheId, $file, $fileType, $fileUrl)
    {
        if ($messageBody != "" && $fromNumber != "" && $widgetUuid != "") {
            $checkWidget = Widgets::where('widget_uuid', $widgetUuid)->first();
            $messageResponse = $this->ctype_int($messageBody);
            if ($messageResponse == 'true') {
                $departmentId = $messageBody - 1;

                $checkDepartment = WidgetDepartmentMapping::where('department_orders', $departmentId)->where('widget_id', $checkWidget->id)->first();
                if (count($checkDepartment) != 0) {
                    $updateMessageCache = MessageCache::where('id', $checkMessageCacheId)->update(['department_id' => $checkDepartment->department_id, 'status' => '0']);
                    $messageType = 1; // Message type 1 ->Mobile SMS 2->Web Chat Message
                    $responsesaveMessageTrack = $this->saveMessageTrack($checkDepartment->department_id, $fromNumber, $widgetUuid, $messageType);
                    if ($responsesaveMessageTrack != false) {
                        $responseSaveContactList = $this->saveContactList($widgetUuid, $fromNumber);
                        if ($responseSaveContactList != false) {
                            $responsesaveMessageLog = $this->saveMessageLog($responseSaveContactList, $widgetUuid);
                            if ($responsesaveMessageLog != false) {
                                //run a update query to update the Message_Track tables from
                                $updateMessageTrack = MessageTrack::where('id', $responsesaveMessageTrack->id)->update(['message_id' => $responsesaveMessageLog]);
                                $type = '1'; // 1-> Mobile 2-> Web
                                $direction = '1'; // 1->Incoming 2-> outgoing
                                $userId = $responsesaveMessageTrack->agent_id;
                                $fetchMessageBodyFromMessageCacheData = MessageCacheData::where('message_cache_id', $checkMessageCacheId)->where('copy', 1)->get();
                                if (count($fetchMessageBodyFromMessageCacheData) != 0) {

                                    foreach ($fetchMessageBodyFromMessageCacheData as $data) {
                                        $this->saveChatThread($responsesaveMessageLog, $widgetUuid, $data->message_body, $type, $direction, $userId, $data->is_mms, $data->file_type, $data->file_url);
                                        $updateMessageCacheData = MessageCacheData::find($data->id);
                                        $updateMessageCacheData->copy = 2;
                                        $updateMessageCacheData->update();
                                    }
                                }
                                $responseChatProcess = $this->chatProcess($fromNumber, $widgetUuid);   //calling chat process

                                //call to node API
                                $time = date("Y-m-d H:i:s");
                                $url = url('/') . ':3000/mobile-chat';
                                $ch = curl_init();
                                curl_setopt($ch, CURLOPT_URL, $url);
                                curl_setopt($ch, CURLOPT_POST, 1);
                                curl_setopt($ch, CURLOPT_POSTFIELDS,
                                    "messageBody=$messageBody&direction=1&user=$fromNumber&chatRoomId=$responseChatProcess&time=$time&callFrom=shelf&file=$file&fileURL=$fileUrl&fileType=$fileType");

                                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                                $server_output = curl_exec($ch);
                                curl_close($ch);
                            }

                        }
                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'response' => [],
                            'error' => true,
                            'message' => 'data Not Saved !'
                        ));
                    }
                } else {

                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'response' => [],
                        'error' => true,
                        'message' => 'department not found !'
                    ));
                }
            } else {

                $checkMessageCache = MessageCache::where('from_phone_number', $fromNumber)->where('widget_uuid', $widgetUuid)->where('status', 1)->first();
                $responseMessageCacheData = $this->saveMessageCacheData($messageBody, $checkMessageCache->id, $file, $fileType, $fileUrl);

                if ($responseMessageCacheData == true) {
                    $getWidgetData = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails')->first();
                    if (count($getWidgetData->widgetDepartment) > 1) {
                        $this->createSmsTemplate($fromNumber, $widgetUuid);
                    } else {
                        $this->singleDepartmentChat($fromNumber, $widgetUuid, $messageBody);
                    }
                } else {
                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'response' => [],
                        'error' => true,
                        'message' => 'data Not Saved !'
                    ));
                }
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'Sorry !'
            ));
        }
    }

    public function checkResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $checkMessageCacheId, $file, $fileType, $fileUrl)
    {
        Log::info('checked resolved message block');
        if ($messageBody != "" && $fromNumber != "" && $widgetUuid != "") {
            $checkWidget = Widgets::where('widget_uuid', $widgetUuid)->first();
            $messageResponse = $this->ctype_int($messageBody);
            if ($messageResponse == 'true') {
                $departmentId = $messageBody - 1;

                $checkDepartment = WidgetDepartmentMapping::where('department_orders', $departmentId)->where('widget_id', $checkWidget->id)->first();
                if (count($checkDepartment) != 0) {
                    $updateMessageCache = MessageCache::where('id', $checkMessageCacheId)->update(['department_id' => $checkDepartment->department_id, 'status' => '0']);
                    $responseSaveContactList = $this->saveContactList($widgetUuid, $fromNumber);
                    if ($responseSaveContactList != false) {
                        $responsesaveMessageLog = $this->saveMessageLog($responseSaveContactList, $widgetUuid);
                        if ($responsesaveMessageLog != false) {
                            //run a update query to update the Message_Track tables from
                            $responsesaveMessageTrack = MessageTrack::where('widget_id', $widgetUuid)
                                ->where('from_phone_number', $fromNumber)->first();
                            $updateMessageTrack = MessageTrack::where('id', $responsesaveMessageTrack->id)->update(['message_id' => $responsesaveMessageLog]);
                            $type = '1'; // 1-> Mobile 2-> Web
                            $direction = '1'; // 1->Incoming 2-> outgoing
                            $userId = $responsesaveMessageTrack->agent_id;
                            $fetchMessageBodyFromMessageCacheData = MessageCacheData::where('message_cache_id', $checkMessageCacheId)->where('copy', 1)->get();
                            if (count($fetchMessageBodyFromMessageCacheData) != 0) {
                                foreach ($fetchMessageBodyFromMessageCacheData as $data) {
                                    $this->saveChatThread($responsesaveMessageLog, $widgetUuid, $data->message_body, $type, $direction, $userId, $data->is_mms, $data->file_type, $data->file_url);
                                    $updateMessageCacheData = MessageCacheData::find($data->id);
                                    $updateMessageCacheData->copy = 2;
                                    $updateMessageCacheData->update();
                                }
                            }
                            $responseChatProcess = $this->chatProcess($fromNumber, $widgetUuid);   //calling chat process

                            //call to node API
                            $time = date("Y-m-d H:i:s");
                            $url = url('/') . ':3000/mobile-chat';
                            $ch = curl_init();
                            curl_setopt($ch, CURLOPT_URL, $url);
                            curl_setopt($ch, CURLOPT_POST, 1);
                            curl_setopt($ch, CURLOPT_POSTFIELDS,
                                "messageBody=$messageBody&direction=1&user=$fromNumber&chatRoomId=$responseChatProcess&time=$time&callFrom=shelf&file=$file&fileURL=$fileUrl&fileType=$fileType");

                            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                            $server_output = curl_exec($ch);
                            curl_close($ch);
                        }

                    }
                } else {

                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'response' => [],
                        'error' => true,
                        'message' => 'department not found !'
                    ));
                }
            } else {

                $checkMessageCache = MessageCache::where('from_phone_number', $fromNumber)->where('widget_uuid', $widgetUuid)->first();
                $responseMessageCacheData = $this->saveMessageCacheData($messageBody, $checkMessageCache->id, $file, $fileType, $fileUrl);

                if ($responseMessageCacheData == true) {
                    $getWidgetData = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails')->first();
                    if (count($getWidgetData->widgetDepartment) > 1) {
                        // $this->createSmsTemplate($fromNumber, $widgetUuid);
                    } else {
                        $this->singleDepartmentChat($fromNumber, $widgetUuid, $messageBody);
                    }
                } else {

                }
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'Sorry !'
            ));
        }
    }

    public function checkSingleResolvedMessageCache($messageBody, $fromNumber, $widgetUuid, $checkMessageCacheId)
    {
        Log::info('checked resolved message block');
        if ($messageBody != "" && $fromNumber != "" && $widgetUuid != "") {
            $checkWidget = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails')->first();
            if ($checkWidget != null) {
                $checkDepartment = WidgetDepartmentMapping::where('department_orders', 0)->where('widget_id', $checkWidget->id)->first();
                if (count($checkDepartment) != 0) {
                    $updateMessageCache = MessageCache::where('id', $checkMessageCacheId)->update(['department_id' => $checkDepartment->department_id, 'status' => '0']);
                    $responseSaveContactList = $this->saveContactList($widgetUuid, $fromNumber);
                    if ($responseSaveContactList != false) {
                        $responsesaveMessageLog = $this->saveMessageLog($responseSaveContactList, $widgetUuid);
                        if ($responsesaveMessageLog != false) {
                            //run a update query to update the Message_Track tables from
                            $responsesaveMessageTrack = MessageTrack::where('widget_id', $widgetUuid)
                                ->where('from_phone_number', $fromNumber)->first();
                            $updateMessageTrack = MessageTrack::where('id', $responsesaveMessageTrack->id)->update(['message_id' => $responsesaveMessageLog]);
                            $type = '1'; // 1-> Mobile 2-> Web
                            $direction = '1'; // 1->Incoming 2-> outgoing
                            $userId = $responsesaveMessageTrack->agent_id;
                            $fetchMessageBodyFromMessageCacheData = MessageCacheData::where('message_cache_id', $checkMessageCacheId)->where('copy', 1)->get();
                            if (count($fetchMessageBodyFromMessageCacheData) != 0) {
                                foreach ($fetchMessageBodyFromMessageCacheData as $data) {
                                    $this->saveChatThread($responsesaveMessageLog, $widgetUuid, $data->message_body, $type, $direction, $userId, $data->is_mms, $data->file_type, $data->file_url);
                                    $updateMessageCacheData = MessageCacheData::find($data->id);
                                    $updateMessageCacheData->copy = 2;
                                    $updateMessageCacheData->update();
                                }
                            }
                            $responseChatProcess = $this->chatProcess($fromNumber, $widgetUuid);   //calling chat process
                            $file = false;
                            $fileUrl = '';
                            $fileType = '';
                            //call to node API
                            $time = date("Y-m-d H:i:s");
                            $url = url('/') . ':3000/mobile-chat';
                            $ch = curl_init();
                            curl_setopt($ch, CURLOPT_URL, $url);
                            curl_setopt($ch, CURLOPT_POST, 1);
                            curl_setopt($ch, CURLOPT_POSTFIELDS,
                                "messageBody=$messageBody&direction=1&user=$fromNumber&chatRoomId=$responseChatProcess&time=$time&callFrom=shelf&file=$file&fileURL=$fileUrl&fileType=$fileType");

                            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                            $server_output = curl_exec($ch);
                            curl_close($ch);
                        }

                    }
                } else {

                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'response' => [],
                        'error' => true,
                        'message' => 'department not found !'
                    ));
                }
            } else {
                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'error' => true,
                    'message' => 'widget not found !'
                ));
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'Sorry !'
            ));
        }
    }

    public function singleDepartmentChat($fromNumber, $widgetUuid, $messageBody)
    {
        Log::info('singleDepartmentChat');
        if ($fromNumber != "" && $widgetUuid != "") {
            $checkWidget = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails', 'widgetSchedule')->first();
            if ($checkWidget != null) {
                $timezone_data = Timezone::where('id', $checkWidget->schedule_timezone)->first();
                $date_utc = new \DateTime("now", new \DateTimeZone($timezone_data->timezone_format));
                $current_time = $date_utc->format('H');
                $current_day = $date_utc->format('D');
                $available = false;
                $availableDayTime = 'We are unable to chat with you now. Please contact us in following time as per ' . $timezone_data->timezone_format . ' timezone';
                foreach ($checkWidget->widgetSchedule as $key => $shedule) {
                    $availableDayTime .= $shedule->day . ' : ' . $shedule->start_time . ' to ' . $shedule->end_time . '';
                    if ($shedule->day == $current_day && explode(':', $current_time)[0] >= explode(':', $shedule->start_time)[0] && explode(':', $current_time)[0] <= explode(':', $shedule->end_time)[0]) {
                        $available = true;
                    }
                }
                $availableDayTime .= ' Thank you.';
                $file = false;
                $fileType = '';
                $fileUrl = '';
                $toNumber = $checkWidget->twilioNumbers->prefix . $checkWidget->twilioNumbers->number;
                if (!$available) {
                    $this->sendSms($availableDayTime, $fromNumber, $toNumber, $file, $fileType, $fileUrl);
                } else {
                    $checkDepartment = WidgetDepartmentMapping::where('department_orders', 0)->where('widget_id', $checkWidget->id)->first();
                    if (count($checkDepartment) != 0) {
                        $checkMessageCache = MessageCache::where('from_phone_number', $fromNumber)->where('widget_uuid', $widgetUuid)->first();
                        if ($checkMessageCache != null) {
                            $updateMessageCache = MessageCache::where('id', $checkMessageCache->id)->update(['department_id' => $checkDepartment->department_id, 'status' => '0']);
                            $messageType = 1; // Message type 1 ->Mobile SMS 2->Web Chat Message
                            $responsesaveMessageTrack = $this->saveMessageTrack($checkDepartment->department_id, $fromNumber, $widgetUuid, $messageType);
                            Log::info('saveMessageTrack');
                            if ($responsesaveMessageTrack != false) {
                                $responseSaveContactList = $this->saveContactList($widgetUuid, $fromNumber);
                                Log::info('saveContactList');
                                if ($responseSaveContactList != false) {
                                    $responsesaveMessageLog = $this->saveMessageLog($responseSaveContactList, $widgetUuid);
                                    Log::info('saveMessageLog');
                                    if ($responsesaveMessageLog != false) {
                                        //run a update query to update the Message_Track tables from
                                        $updateMessageTrack = MessageTrack::where('id', $responsesaveMessageTrack->id)->update(['message_id' => $responsesaveMessageLog]);
                                        $type = '1'; // 1-> Mobile 2-> Web
                                        $direction = '1'; // 1->Incoming 2-> outgoing
                                        $userId = $responsesaveMessageTrack->agent_id;
                                        $fetchMessageBodyFromMessageCacheData = MessageCacheData::where('message_cache_id', $checkMessageCache->id)->where('copy', 1)->get();
                                        if (count($fetchMessageBodyFromMessageCacheData) != 0) {

                                            foreach ($fetchMessageBodyFromMessageCacheData as $data) {
                                                $this->saveChatThread($responsesaveMessageLog, $widgetUuid, $data->message_body, $type, $direction, $userId, $data->is_mms, $data->file_type, $data->file_url);
                                                $updateMessageCacheData = MessageCacheData::find($data->id);
                                                $updateMessageCacheData->copy = 2;
                                                $updateMessageCacheData->update();
                                            }
                                        }
                                        $responseChatProcess = $this->chatProcess($fromNumber, $widgetUuid);   //calling chat process
                                        $time = date("Y-m-d H:i:s");
                                        $url = url('/') . ':3000/mobile-chat';
                                        $ch = curl_init();
                                        curl_setopt($ch, CURLOPT_URL, $url);
                                        curl_setopt($ch, CURLOPT_POST, 1);
                                        curl_setopt($ch, CURLOPT_POSTFIELDS,
                                            "messageBody=$messageBody&direction=1&user=$fromNumber&chatRoomId=$responseChatProcess&time=$time&callFrom=shelf&file=$file&fileURL=$fileUrl&fileType=$fileType");

                                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                                        $server_output = curl_exec($ch);
                                        curl_close($ch);
                                    }
                                }
                            }
                        } else {
                            Log::info('3 ==> else');
                            return Response::json(array(
                                'status' => false,
                                'code' => 400,
                                'error' => true,
                                'response' => [],
                                'message' => 'Message cache not found !'
                            ));
                        }
                    } else {
                        Log::info('3 ==> else');
                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'error' => true,
                            'response' => [],
                            'message' => 'department not found !'
                        ));
                    }
                }
            } else {
                Log::info('3 ==> else');
                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Data not found !'
                ));
            }
        } else {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to check message input
     *
     * @param text
     * @return binary(true or false)
     */
    function ctype_int($text)
    {
        return preg_match('/^-?[0-9]+$/', (string)$text) ? true : false;
    }

    /**
     * function to check Create sms template
     *
     * @param text
     * @return binary(true or false)
     */
    public function createSmsTemplate($fromNumber, $widgetUuid)
    {
        Log::info('3 ==> sms template');
        if ($fromNumber != "" && $widgetUuid != "") {
            $getWidgetData = Widgets::where('widget_uuid', $widgetUuid)->with('twilioNumbers', 'widgetDepartment.departmentDetails', 'widgetSchedule')->first();
            if (count($getWidgetData->widgetDepartment) > 1) {
                $timezone_data = Timezone::where('id', $getWidgetData->schedule_timezone)->first();
                $date_utc = new \DateTime("now", new \DateTimeZone($timezone_data->timezone_format));
                $current_time = $date_utc->format('H');
                $current_day = $date_utc->format('D');
                $available = false;
                $availableDayTime = 'We are unable to chat with you now. Please contact us in following time as per ' . $timezone_data->timezone_format . ' timezone ';
                foreach ($getWidgetData->widgetSchedule as $key => $shedule) {
                    $availableDayTime .= $shedule->day . ' : ' . $shedule->start_time . ' to ' . $shedule->end_time . '';
                    if ($shedule->day == $current_day && explode(':', $current_time)[0] >= explode(':', $shedule->start_time)[0] && explode(':', $current_time)[0] <= explode(':', $shedule->end_time)[0]) {
                        $available = true;
                    }
                }
                $availableDayTime .= ' Thank you.';
                $toNumber = $getWidgetData->twilioNumbers->prefix . $getWidgetData->twilioNumbers->number;
                $file = false;
                $fileUrl = '';
                $fileType = '';
                if (!$available) {
                    $smsBody = $availableDayTime;
                } else {
                    $smsBody = "Please Choose a Department from the list ...";
                    foreach ($getWidgetData->widgetDepartment as $data) {
                        $smsBody .= "\n";
                        $smsBody .= "\n";
                        $smsBody .= $data->department_orders + 1;
                        $smsBody .= " - ";
                        $smsBody .= $data->departmentDetails->department_name;
                    }
                    $smsBody .= "\n";
                    $smsBody .= "Please Reply with the Number only.";
                    $smsBody .= "\n";
                    $smsBody .= "Thanks";
                }
                $this->sendSms($smsBody, $fromNumber, $toNumber, $file, $fileType, $fileUrl);
            } else {
                Log::info('3 ==> else');
                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Data not found !'
                ));
            }
        } else {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to send sms to the from number
     * fromNumber -> widget phone number , toNumber -> client phone number
     * @param smsBody, fromNumber, toNumber
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendSms($smsBody, $toNumber, $fromNumber, $file, $fileType, $fileUrl)
    {
        Log::info('4 ==> send sms');
        if ($smsBody != "" && $toNumber != "" && $fromNumber != "") {
            $fromNumberNew = substr($fromNumber, -10);          //add a filter
            $keys = TwilioNumber::where('number', $fromNumberNew)->with('getTwilioCredentials')->first();
            if ($keys) {
                try {
                    $fromNumber = $keys->prefix . $keys->number;
                    $sid = $keys->getTwilioCredentials->twilio_sid;
                    $token = $keys->getTwilioCredentials->twilio_token;
                    $clientsms = new Client($sid, $token);
                    if ($file) {
                        $message = $clientsms->messages->create(
                            $toNumber, array(
                            "from" => $fromNumber,
                            "body" => $smsBody,
                            "mediaUrl" => $fileUrl
                        ));
                    } else {
                        $message = $clientsms->messages->create(
                            $toNumber, array(
                            "from" => $fromNumber,
                            "body" => $smsBody
                        ));
                    }
                    \Log::info("from =>" . $fromNumber . "body =>" . $smsBody . "To--> " . $toNumber);
                    \Log::info('SMS Send !');
                } catch (\Exception $e) {
                    \Log::info('SMS Not Send !' . $e->getMessage());
                    return Response::json(array(
                        'error' => true,
                        'code' => 400,
                        'status' => false,
                        'response' => [],
                        'message' => $e->getMessage()
                    ));
                }
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Sorry Data not found !'
                ));
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * Send email notification
     * @param $body
     * @param $email
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendEmail($body, $email)
    {
        $email = trim($email);
        if ($email != "") {
            $checkUser = Users::where('email', $email)->first();
            if (count($checkUser) != 0) {
                try {
                    Mail::send('emails.agent-notification', ['body' => $body, 'fname' => $checkUser->first_name], function ($message) use ($checkUser) {
                        $message->from('sms@telemojo.com', 'sms.telemojo.com');
                        $message->to($checkUser->email, $checkUser->first_name)->subject('3c chat notification');
                    });
                    if (Mail::failures()) {

                        return Response()->json([
                            'code' => 400,
                            'error' => true,
                            'status' => false,
                            'response' => [],
                            'message' => 'Try Again!!'
                        ]);

                    } else {

                        return Response()->json([
                            'code' => 200,
                            'error' => false,
                            'status' => true,
                            'response' => [],
                            'message' => 'Mail Successfully Send To Your Registered Email!!'
                        ]);

                    }
                } catch (\Exception $e) {
                    Log::info('can not able to send mail');
                }
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'No User Found !'
                ));

            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'No User Found !'
            ));

        }
    }

    /**
     * function to save message cache table
     *
     * @param fromNumber, widgetUuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveMessageCache($fromNumber, $widgetUuid)
    {
        if ($fromNumber != "" && $widgetUuid != "") {
            $saveMessageCache = new MessageCache;
            $saveMessageCache->widget_uuid = $widgetUuid;
            $saveMessageCache->from_phone_number = $fromNumber;
            $saveMessageCache->status = 1;
            if ($saveMessageCache->save()) {
                \Log::info('9 : Message save in MessageCache');
                return $saveMessageCache->id;
            } else {
                return false;
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to save message cache data table
     *
     * @param messageBody, responseMessageCacheId
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveMessageCacheData($messageBody, $responseMessageCacheId, $file, $fileType, $fileUrl)
    {
        if ($messageBody != "" && $responseMessageCacheId != "") {
            $saveMessageCacheData = new MessageCacheData;
            $saveMessageCacheData->message_cache_id = $responseMessageCacheId;
            $saveMessageCacheData->message_body = $messageBody;
            $saveMessageCacheData->status = 1;
            $saveMessageCacheData->is_mms = $file;
            $saveMessageCacheData->file_type = $fileType;
            $saveMessageCacheData->file_url = $fileUrl;
            if ($saveMessageCacheData->save()) {
                \Log::info('9 : Message save in MessageCacheData');
                return true;
            } else {
                return false;
            }
        } else {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to save message_track table
     *
     * @param departmentId, fromNumber, widgetUuid
     * @return \Illuminate\Http\JsonResponse
     */

    public function saveMessageTrack($departmentId, $fromNumber, $widgetUuid, $messageType)
    {
        if ($departmentId != "" && $fromNumber != "" && $widgetUuid != "") {
            $saveMessageTrack = new MessageTrack;
            $saveMessageTrack->widget_id = $widgetUuid;
            $saveMessageTrack->department_id = $departmentId;
            $saveMessageTrack->from_phone_number = $fromNumber;
            $saveMessageTrack->message_type = $messageType; // Message type 1 ->Mobile SMS 2->Web Chat Message
            $saveMessageTrack->status = 1;
            if ($saveMessageTrack->save()) {
                return $saveMessageTrack;
            } else {
                return false;
            }

        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to save contact_list table
     *
     * @param departmentId, fromNumber, widgetUuid,name,email
     * @return \Illuminate\Http\JsonResponse
     */

    public function saveContactList($widgetUuid, $fromNumber, $name = null, $email = null)
    {
        if ($widgetUuid != "" && $fromNumber != "") {
            $checkContactList = ContactList::where('widget_id', $widgetUuid)->where('phone', $fromNumber)->first();
            if (count($checkContactList) == 0) {
                $saveContactList = new ContactList;
                $saveContactList->phone = $fromNumber;
                $saveContactList->widget_id = $widgetUuid;
                $saveContactList->name = $name;
                $saveContactList->email = $email;
                if ($saveContactList->save()) {

                    return $saveContactList->id;
                } else {

                    return false;
                }
            } else {

                return $checkContactList->id;
            }

        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to save message_log table
     *
     * @param saveContactListId,widgetUuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveMessageLog($saveContactListId, $widgetUuid)
    {
        Log::info('Inside saveMessageLog');
        if ($saveContactListId != "" && $widgetUuid != "") {
            $checkMessageLog = MessageLog::where('widget_id', $widgetUuid)->where('contact_list_id', $saveContactListId)->where('status', 3)->first();
            if (count($checkMessageLog) == 0) {

                $saveMessageLog = new MessageLog;
                $saveMessageLog->widget_id = $widgetUuid;
                $saveMessageLog->contact_list_id = $saveContactListId;
                if ($saveMessageLog->save()) {

                    return $saveMessageLog->id;
                } else {

                    return false;
                }
            } else {
                return $checkMessageLog->id;

            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to save chat_thread table
     *
     * @param responseSaveContactList,widgetUuid,messageBody,type,direction,userId
     * @return \Illuminate\Http\JsonResponse
     */

    public function saveChatThread($responseSaveContactList, $widgetUuid, $messageBody, $type, $direction, $userId, $file, $fileType, $fileUrl)
    {
        if ($responseSaveContactList != "" && $widgetUuid != "" && ($messageBody != "" || $file)) {

            $saveChatThread = new ChatThread;
            $saveChatThread->message_log_id = $responseSaveContactList;
            $saveChatThread->widget_id = $widgetUuid;
            $saveChatThread->chat_thread = $messageBody;
            $saveChatThread->user_id = $userId;
            $saveChatThread->type = $type;
            $saveChatThread->direction = $direction;
            $saveChatThread->chat_type = $type;
            $saveChatThread->is_mms = $file;
            $saveChatThread->file_type = $fileType;
            $saveChatThread->file_url = $fileUrl;
            if ($saveChatThread->save()) {

                return $saveChatThread;
            } else {
                return false;
            }
        }
    }

    /**
     * function to save chat_thread for other incoming chat messagestable
     *
     * @param responseSaveContactList,widgetUuid,messageBody,type,direction,userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveOtherChat($fromNumber, $widget_uuid, $messageBody, $type, $direction, $userId = null, $file, $fileType, $fileUrl, $status)
    {
        if ($fromNumber != "" && $widget_uuid != "") {
            $getContactListId = ContactList::where('widget_id', $widget_uuid)->where('phone', $fromNumber)->select('id')->first();
            if (count($getContactListId) != 0) {
                $messageLogId = MessageLog::where('contact_list_id', $getContactListId->id)->where('status', $status)->select('id')->first();
                if ($messageLogId) {
                    $saveChatThread = new ChatThread;
                    $saveChatThread->message_log_id = $messageLogId->id;
                    $saveChatThread->widget_id = $widget_uuid;
                    $saveChatThread->chat_thread = $messageBody;
                    $saveChatThread->type = $type;
                    $saveChatThread->user_id = $userId;
                    $saveChatThread->direction = $direction;
                    $saveChatThread->chat_type = $type;
                    $saveChatThread->is_mms = $file;
                    $saveChatThread->file_type = $fileType;
                    $saveChatThread->file_url = $fileUrl;
                    if ($saveChatThread->save()) {
                        //call to node API
                        $getChatInfo = MessageTrack::where('message_id', $messageLogId->id)->select('agent_id', 'chat_room_id', 'status')->first();
                        if ($type == 1 && $getChatInfo) {
                            /** call to node API for sending this message to the frontend chat secticon */
                            $time = date("Y-m-d H:i:s");
                            $url = url('/') . ':3000/mobile-chat';
                            $ch = curl_init();
                            curl_setopt($ch, CURLOPT_URL, $url);
                            curl_setopt($ch, CURLOPT_POST, 1);
                            curl_setopt($ch, CURLOPT_POSTFIELDS,
                                "messageBody=$messageBody&direction=1&user=$fromNumber&chatRoomId=$getChatInfo->chat_room_id&time=$time&callFrom=shelf&file=$file&fileURL=$fileUrl&fileType=$fileType");

                            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                            $server_output = curl_exec($ch);
                            curl_close($ch);
                        }
                        \Log::info('Chat message saved !');
                        return true;
                    } else {
                        Log::info('Chat message not saved ! chat thread not saved');
                        return false;
                    }
                } else {
                    \Log::info('Chat message not saved ! Message Log not found');
                    return false;
                }
            } else {
                \Log::info('Chat message not saved ! Contact list not found');
                return false;
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Sorry paramiters are not present in the request !'
            ));
        }
    }

    /**
     * function to check the message comming from the web js client
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */

    public function checkWebMessage(Request $request)
    {
        //Variable Declaration
        $fromNumber = $request->fromNumber;
        $departmentId = $request->departmentId;
        $name = $request->name;
        $email = $request->email;
        $widgetUuid = $request->widgetUuid;

        $checkMessageTrack = MessageTrack::where('widget_id', $widgetUuid)->where('from_phone_number', $fromNumber)->where('status', 1)->first();
        if (count($checkMessageTrack) == 0) {
            $saveMessageTrack = new MessageTrack;
            $saveMessageTrack->widget_id = $widgetUuid;
            $saveMessageTrack->department_id = $departmentId;
            $saveMessageTrack->from_phone_number = $fromNumber;
            $saveMessageTrack->message_type = 2; // Message type 1 ->Mobile SMS 2->Web Chat Message
            $saveMessageTrack->status = 1;
            if ($saveMessageTrack->save()) {

                $responsesaveContactList = $this->saveContactList($widgetUuid, $fromNumber, $name, $email);
                if ($responsesaveContactList != 0) {
                    $responsesaveMessageLog = $this->saveMessageLog($responsesaveContactList, $widgetUuid);
                    if ($responsesaveMessageLog != false) {

                        $updateMessageTrack = MessageTrack::where('id', $saveMessageTrack->id)->update(['message_id' => $responsesaveMessageLog]);
                        $chatRoomId = $this->chatProcess($fromNumber, $widgetUuid);   //calling chat process
                        //call a funtion to fetch  all the agents with there corrosponding room id and status
                        $response['chatRoomId'] = $chatRoomId;
                        $response['name'] = $name;
                        $response['email'] = $email;
                        $response['name'] = $name;

                        return Response::json(array(
                            'status' => true,
                            'code' => 200,
                            'error' => false,
                            'response' => $response,
                            'message' => 'Chatroom No !'
                        ));

                    }

                } else {

                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'error' => true,
                        'response' => [],
                        'message' => 'Something Went wrong !'
                    ));
                }

            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Something Went wrong !'
                ));
            }
        } else {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'No Data Found !'
            ));
        }


    }

    /**
     * function to check the message content and update/insert data on message_track,chat_thread table
     *  make a Route for this
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function CheckWebChatMessage(Request $request)
    {
        Log::info('15 => check web chat');
        $chatRoomId = $request->chatRoomId;
        $messageBody = $request->messageBody;
        $direction = $request->direction;  // 1->Incoming 2-> outgoing
        $file = $request->file;
        $fileType = $request->fileType;
        $fileUrl = $request->fileURL;
        if ($chatRoomId != "") {
            $checkMessageTrack = MessageTrack::where('chat_room_id', $chatRoomId)->first();
            if (count($checkMessageTrack) != 0) {

                if (isset($request->callFrom) && $request->callFrom != null && $request->callFrom == 'shelf') {
                    $response = ['message' => $messageBody,
                        'direction' => $direction,
                        'roomNo' => $chatRoomId,
                        'user' => $request->user,
                        'created_at' => $request->time,
                        'isMMS' => $file,
                        'fileType' => $fileType,
                        'fileUrl' => $fileUrl
                    ];
                } else {
                    if ($direction == 1 || $direction == 2) {
                        if ($checkMessageTrack->message_type == 1) {
                            $getWidgetPhoneNumber = Widgets::where('widget_uuid', $checkMessageTrack->widget_id)->with('twilioNumbers')->first();
                            $widgetPhoneNumber = $getWidgetPhoneNumber->twilioNumbers->prefix . $getWidgetPhoneNumber->twilioNumbers->number;
                            //modify this part
                            Log::info('15 => send sms');
                            $this->sendSms($messageBody, $checkMessageTrack->from_phone_number, $widgetPhoneNumber, $file, $fileType, $fileUrl);
                        }
                        $messageId = $checkMessageTrack->message_id;
                        $userId = $checkMessageTrack->agent_id;
                        $widgetUuid = $checkMessageTrack->widget_id;
                        $type = 2; //1->mobile 2->web
                        Log::info('15 => save chat sms');
                        $responseSaveChatThread = $this->saveChatThread($messageId, $widgetUuid, $messageBody, $type, $direction, $userId, $file, $fileType, $fileUrl);
                        if ($responseSaveChatThread->direction == 1) {
                            //user contain client info
                            $getClientInfo = MessageLog::where('id', $responseSaveChatThread->message_log_id)->with('clientName')->first();
                            if ($getClientInfo->clientName->name != "") {
                                $user = $getClientInfo->clientName->name;
                            } else {
                                $user = $getClientInfo->clientName->phone;
                            }
                        }
                        if ($responseSaveChatThread->direction == 2) {
                            //user contain Agent info
                            $getAgentInfo = ChatThread::where('id', $responseSaveChatThread->id)->with('agentInfo')->first();
                            $user = $getAgentInfo->agentInfo->first_name;
                        }

                        $response = ['message' => $responseSaveChatThread->chat_thread,
                            'direction' => $responseSaveChatThread->direction,
                            'roomNo' => $checkMessageTrack->chat_room_id,
                            'user' => $user,
                            'created_at' => $responseSaveChatThread->created_at,
                            'isMMS' => $file,
                            'fileType' => $fileType,
                            'fileUrl' => $fileUrl];

                    } elseif ($direction == 4) {
                        $file = false;
                        $fileType = '';
                        $fileUrl = '';
                        $messageId = $checkMessageTrack->message_id;
                        $userId = $checkMessageTrack->agent_id;
                        $widgetUuid = $checkMessageTrack->widget_id;
                        $responseSaveChatThread = $this->saveChatThread($messageId, $widgetUuid, $messageBody, 2, $direction, $userId, $file, $fileType, $fileUrl);
                        $response = ['message' => $responseSaveChatThread->chat_thread,
                            'direction' => $responseSaveChatThread->direction,
                            'roomNo' => $checkMessageTrack->chat_room_id,
                            'user' => 'system',
                            'created_at' => $responseSaveChatThread->created_at,
                            'isMMS' => $file,
                            'fileType' => $fileType,
                            'fileUrl' => $fileUrl];
                    }
                }
                return Response::json(array(
                    'status' => true,
                    'code' => 200,
                    'error' => false,
                    'response' => $response,
                    'message' => 'Message sent !'
                ));
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Message Not send !'
                ));
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'No data found !'
            ));
        }
    }

    /**
     * function to start chat process
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function chatProcess($fromNumber, $widgetUuid)
    {
        Log::info('Inside chat Progress table');
        if ($fromNumber != "" && $widgetUuid != "") {
            $checkMessageTrack = MessageTrack::where('widget_id', $widgetUuid)->where('from_phone_number', $fromNumber)->whereIn('status', [1, 6])->first();

            if (count($checkMessageTrack) != 0) {
                $chatRoomId = $this->generateRandomString();
                $checkMessageTrack->chat_room_id = $chatRoomId;
                if ($checkMessageTrack->update()) {
                    $departmentId = $checkMessageTrack->department_id;
                    $messageId = $checkMessageTrack->message_id;
                    $countAgentDepartment = DepartmentAgentMap::where('department_id', $departmentId)->count();
                    $responsesaveMessageForwardCount = $this->saveMessageForwardCount($widgetUuid, $countAgentDepartment, $messageId);
                    if ($responsesaveMessageForwardCount != false) {

                        $this->saveMessageAgentTrack($responsesaveMessageForwardCount, $chatRoomId, $widgetUuid, $messageId, $departmentId);
                    }
                } else {

                    return Response::json(array(
                        'status' => false,
                        'code' => 400,
                        'error' => true,
                        'response' => [],
                        'message' => 'Something went wrong !'
                    ));
                }
                return $chatRoomId;

            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Something went wrong !'
                ));
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Something went wrong !'
            ));
        }
    }

    /**
     * function to generate Random String for the chat_room_id
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    function generateRandomString()
    {
        $length = 4;
        $characters = '123456789';
        $charactersLength = strlen($characters);
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {

            $randomString .= $characters[rand(0, $charactersLength - 1)];

        }

        return $randomString;
    }

    /**
     * function to save message forward count table
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveMessageForwardCount($widgetUuid, $countAgentDepartment, $messageId)
    {
        if ($widgetUuid != "" && $countAgentDepartment != "" && $messageId != "") {

            $saveMessageForwardCount = new MessageForwardCounter;
            $saveMessageForwardCount->widget_id = $widgetUuid;
            $saveMessageForwardCount->agent_count = $countAgentDepartment;
            $saveMessageForwardCount->count_init = 1;
            $saveMessageForwardCount->message_id = $messageId;
            $saveMessageForwardCount->status = 1;
            if ($saveMessageForwardCount->save()) {
                return $saveMessageForwardCount->id;

            } else {
                return false;
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Something went wrong !'
            ));
        }

    }

    /**
     * function to save message agent track  table
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveMessageAgentTrack($responsesaveMessageForwardCount, $chatRoomId, $widgetUuid, $messageId, $departmentId)
    {
        Log::info('Inside saveMessageAgentTrack');
        if ($responsesaveMessageForwardCount != "" && $chatRoomId != "" && $widgetUuid != "" && $messageId != "" && $departmentId != "") {

            $getAllAgentId = DepartmentAgentMap::where('department_id', $departmentId)->select('user_id')->get();
            if (count($getAllAgentId) != 0) {
                foreach ($getAllAgentId as $agentId) {
                    $saveMessageAgentTrack = new MessageAgentTrack;
                    $saveMessageAgentTrack->agent_id = $agentId->user_id;
                    $saveMessageAgentTrack->message_id = $messageId;
                    $saveMessageAgentTrack->chat_room_id = $chatRoomId;
                    $saveMessageAgentTrack->widget_id = $widgetUuid;
                    $saveMessageAgentTrack->message_forward_counter_id = $responsesaveMessageForwardCount;
                    $saveMessageAgentTrack->status = 1;
                    if ($saveMessageAgentTrack->save()) {

                        $this->sendNotificationToAgents($saveMessageAgentTrack->agent_id, $saveMessageAgentTrack->widget_id);
                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'error' => true,
                            'response' => [],
                            'message' => 'Something went wrong !'
                        ));
                    }

                }
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Something went wrong !'
                ));
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Something went wrong !'
            ));
        }
    }

    /**
     * function to send notification to agents
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendNotificationToAgents($agentId, $widgetUuId)
    {
        if ($agentId != "" && $widgetUuId != "") {
            $getAgent = Users::where('id', $agentId)->with('pendingChatCount')->first();
            if (count($getAgent) != 0) {
                //   $agentPhoneNumber = $getAgent->phone;
                $agentPhoneNumber = '+1' . preg_replace('/\D+/', '', $getAgent->phone);
                /** filter for the phone number */
            } else {
                $agentPhoneNumber = "";
            }
            $getToNumber = Widgets::where('widget_uuid', $widgetUuId)->with('twilioNumbers')->first();
            $toNumber = '';
            if (count($getToNumber) != 0
                && null !== $getToNumber->twilioNumbers
                && null !== $getToNumber->twilioNumbers->prefix . $getToNumber
                && null !== $getToNumber->twilioNumbers->prefix . $getToNumber->twilioNumbers) {
                $toNumber = $getToNumber->twilioNumbers->prefix . $getToNumber->twilioNumbers->number;
            } else {
                $toNumber = "";
            }
            $smsBody = $getAgent ? $getAgent->first_name . ',' : '';
            $smsBody .= ' You have ' . $getAgent->pendingChatCount->count() . ' chat requests at http://greys.telemojo.net/pending ';
            //$smsBody = "link to visit the page in the website http://sms.telemojo.com/chat/ongoing (demo api url)";
            /** Try to send sms */
            \Log::info('$smsBody-->' . $smsBody . '$agentPhoneNumber-->' . $agentPhoneNumber . '$toNumber-->' . $toNumber);
            $userController = new UserController;
            if (!$userController->userLoginStatus($agentId)) {
                \Log::info('user Logged in now send ');
                if ($getAgent->is_phone_notification && $getAgent->is_block == '1') {
                    Log::info('phone notification');
                    $file = false;
                    $fileType = '';
                    $fileUrl = '';
                    $this->sendSms($smsBody, $agentPhoneNumber, $toNumber, $file, $fileType, $fileUrl);
                }
                if ($getAgent->is_email_notification && $getAgent->is_block == '1') {
                    Log::info('email notification');
                    $this->sendEmail($smsBody, $getAgent->email);
                }
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Message not Send,Something went wrong !'
            ));
        }
    }

    /**
     * function to check agent chat action from the from
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function agentChatAction(Request $request)
    {
        $agentId = $request->agentId;
        $chatRoomId = $request->chatRoomId;
        $status = $request->status; //status According to the action    1->iniciated 2->Accept 3->Reject 4->Transfer

        $checkMessageAgentTrack = MessageAgentTrack::where('agent_id', $agentId)->where('chat_room_id', $chatRoomId)->first();

        if (count($checkMessageAgentTrack) != 0) {
            if ($status == 2) {   // Accept status Scenario

                $responseAcceptChat = $this->acceptChat($checkMessageAgentTrack);
                return $responseAcceptChat;
            }
            if ($status == 3) {  // Reject status Scenario

                $responseRejectChat = $this->rejectChat($checkMessageAgentTrack);
                return $responseRejectChat;
            }
            if ($status == 4) {  // Transfer Status Scenario

                $departmentId = $request->departmentId;   // for transfer the the chat to a new department
                $toAgentId = $request->toAgentId;  // for transfer the the chat to a new department
                $responseTransferChat = $this->transferChat($checkMessageAgentTrack, $departmentId, $toAgentId);
                return $responseTransferChat;
            }
            if ($status == 5) {  // Resolve Status Scenario
                $responseresolveChat = $this->resolveChat($checkMessageAgentTrack);
                return $responseresolveChat;

            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'error' => true,
                    'response' => [],
                    'message' => 'Sorry wrong status,Something went wrong !'
                ));
            }

        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'No data found !'
            ));
        }
    }


    /**
     * function to accept chat from agent
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function acceptChat($checkMessageAgentTrack)
    {
        $messageAgentTrackId = $checkMessageAgentTrack->id;
        $agentId = $checkMessageAgentTrack->agent_id;
        $widgetUuid = $checkMessageAgentTrack->widget_id;
        $chatRoomId = $checkMessageAgentTrack->chat_room_id;
        $messageId = $checkMessageAgentTrack->message_id;
        $messageForwardCountId = $checkMessageAgentTrack->message_forward_counter_id;
        $status = 2;    //accept Scenario

        $updateMessageAgentTrack = MessageAgentTrack::where('id', $messageAgentTrackId)->update(['status' => $status]);

        $deleteOtherAgents = MessageAgentTrack::where('agent_id', '!=', $agentId)->where('widget_id', $widgetUuid)->where('message_id', $messageId)->where('chat_room_id', $chatRoomId)->delete();

        $updateMessageTrack = MessageTrack::where('message_id', $messageId)->update(['agent_id' => $agentId, 'status' => $status]);

        $updateMessageTrack = MessageLog::where('id', $messageId)->update(['user_id' => $agentId, 'status' => $status]);

        //$updateChatThread   = ChatThread::where('message_log_id',$messageId)->where('widget_id',$widgetUuid)->update(['user_id' => $agentId,'status' => $status]);    //comment out

        $updateMessageForwardCounter = MessageForwardCounter::where('id', $messageForwardCountId)->update(['status' => $status]);

        \Log::info('$messageAgentTrackId-->' . $messageAgentTrackId . 'message_id->' . $messageId);
        $checkAndUpdateAgentHistory = AgentTransferHistory::where('message_id', $messageId)->where('status', 0)->first();

        if (count($checkAndUpdateAgentHistory)) {
            $checkAndUpdateAgentHistory->transfer_to_agent_id = $agentId;
            $checkAndUpdateAgentHistory->status = 1;
            $checkAndUpdateAgentHistory->other_agent_ids = null;
            $checkAndUpdateAgentHistory->save();
        }

        $response = ['agentId' => $agentId, 'chatRoomId' => $chatRoomId, 'status' => $status];

        return Response::json(array(
            'status' => true,
            'code' => 200,
            'error' => true,
            'response' => $response,
            'message' => 'Agent and chatroom !'
        ));
    }

    /**
     * function to reject chat from agent
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function rejectChat($checkMessageAgentTrack)
    {
        $messageAgentTrackId = $checkMessageAgentTrack->id;
        $agentId = $checkMessageAgentTrack->agent_id;
        $widgetUuid = $checkMessageAgentTrack->widget_id;
        $chatRoomId = $checkMessageAgentTrack->chat_room_id;
        $messageId = $checkMessageAgentTrack->message_id;
        $messageForwardCountId = $checkMessageAgentTrack->message_forward_counter_id;
        $status = 3;    //reject Scenario

        $updateMessageAgentTrack = MessageAgentTrack::where('id', $messageAgentTrackId)->update(['status' => $status]);
        $countRejectedChat = MessageAgentTrack::where('message_id', $messageId)->where('chat_room_id', $chatRoomId)->where('status', $status)->count();
        //$updateMessageTrack      = MessageTrack::where('message_id',$messageId)->update(['agent_id'=>$agentId,'status'=>$status]);
        $checkMessageForwardCounter = MessageForwardCounter::where('id', $messageForwardCountId)->first();
        if ($checkMessageForwardCounter->agent_count == $countRejectedChat) {

            $checkMessageForwardCounter->count_init = ($checkMessageForwardCounter->count_init + 1);
            $checkMessageForwardCounter->update();
            $updateMessageTrack = MessageTrack::where('message_id', $messageId)->update(['status' => 1]); //message track status will be 1 for again inicating the other messages
            $updateMessageAgentTrack = MessageAgentTrack::where('message_forward_counter_id', $checkMessageForwardCounter->id)->update(['status' => 1]); //update this table for reinicate the chat request to agents
            $this->inicateRejectNotificationToAgents($checkMessageForwardCounter->id, $widgetUuid);

            //call to node API
            $url = url('/') . ':3000/send-rooms';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, "");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $server_output = curl_exec($ch);
            curl_close($ch);

            $response = ['agentId' => $agentId, 'chatRoomId' => $chatRoomId, 'status' => $status];
            return Response::json(array(
                'status' => true,
                'code' => 200,
                'error' => false,
                'response' => $response,
                'message' => 'Agent and chatroom with Reject Status !'
            ));

        } else {
            //call to node API
            $url = url('/') . ':3000/send-rooms';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, "");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $server_output = curl_exec($ch);
            curl_close($ch);

            $response = ['agentId' => $agentId, 'chatRoomId' => $chatRoomId, 'status' => $status];
            return Response::json(array(
                'status' => true,
                'code' => 200,
                'error' => false,
                'response' => $response,
                'message' => 'Agent and chatroom with Reject Status !'
            ));
        }
    }


    /**
     * function to inicate reject notification to all the agent in the department
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function inicateRejectNotificationToAgents($messageForwardCounterId, $widgetUuid)
    {
        if ($messageForwardCounterId != "" && $widgetUuid != "") {

            $getAgents = MessageAgentTrack::where('message_forward_counter_id', $messageForwardCounterId)->get();
            if (count($getAgents) != 0) {
                foreach ($getAgents as $agent) {
                    $this->sendNotificationToAgents($agent->agent_id, $widgetUuid);
                }
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'error' => true,
                    'message' => 'Something went wrong !'
                ));
            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'Something went wrong !'
            ));
        }

    }

    /**
     * function to transfer the chat
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */

    public function transferChat($checkMessageAgentTrack, $departmentId = null, $toAgentId = null)
    {
        $messageAgentTrackId = $checkMessageAgentTrack->id;
        $fromAgentId = $checkMessageAgentTrack->agent_id;
        $widgetUuid = $checkMessageAgentTrack->widget_id;
        $chatRoomId = $checkMessageAgentTrack->chat_room_id;
        $messageId = $checkMessageAgentTrack->message_id;
        $status = 4;    //Transfer Scenario
        \Log::info('$fromAgentId-->' . $fromAgentId . '$departmentId-->' . $departmentId . '$toAgentId-->' . $toAgentId);
        if ($departmentId != "") {  //transfer to a department
            $allAgentsIds = [];
            $checkDepartment = DepartmentAgentMap::where('department_id', $departmentId)->whereNotIn('user_id', [$fromAgentId])->select('user_id')->get();
            if (count($checkDepartment) != 0) {
                $dpartmentAgentCount = count($checkDepartment);
                $updateMessageTrack = MessageTrack::where('message_id', $messageId)->update(['department_id' => $departmentId, 'status' => $status, 'agent_id' => null]);
                $updateMessageForwardCounter = MessageForwardCounter::where('widget_id', $widgetUuid)->where('message_id', $messageId)->first();
                $updateMessageForwardCounter->agent_count = $dpartmentAgentCount;
                $updateMessageForwardCounter->status = $status;
                $updateMessageForwardCounter->update();
                $deleteMessageAgentTrack = MessageAgentTrack::where('message_forward_counter_id', $updateMessageForwardCounter->id)->delete();

                foreach ($checkDepartment as $agent) {
                    $allAgentsIds[] = $agent->user_id;
                    $saveMessageAgentTrack = new MessageAgentTrack;
                    $saveMessageAgentTrack->agent_id = $agent->user_id;
                    $saveMessageAgentTrack->message_id = $messageId;
                    $saveMessageAgentTrack->chat_room_id = $chatRoomId;
                    $saveMessageAgentTrack->widget_id = $widgetUuid;
                    $saveMessageAgentTrack->message_forward_counter_id = $updateMessageForwardCounter->id;
                    $saveMessageAgentTrack->status = 1;
                    $saveMessageAgentTrack->save();
                    $this->sendNotificationToAgents($saveMessageAgentTrack->agent_id, $saveMessageAgentTrack->widget_id);
                }

                $removeFromAgentId = array_diff($allAgentsIds, [$fromAgentId]);
                $allAgentsIds = implode(',', $removeFromAgentId);
                $getLastChatThreadId = ChatThread::where('user_id', $fromAgentId)->where('message_log_id', $messageId)->max('id');        // find the last chatThread id
                /** Save to transfer History */
                $createTransferHistory = new AgentTransferHistory;
                $createTransferHistory->message_agent_track_id = $messageAgentTrackId;
                $createTransferHistory->transfer_from_agent_id = $fromAgentId;
                $createTransferHistory->transfer_to_agent_id = null;
                $createTransferHistory->chat_room_id = $chatRoomId;
                $createTransferHistory->last_chat_thread_id = $getLastChatThreadId;
                $createTransferHistory->message_id = $messageId;
                $createTransferHistory->other_agent_ids = $allAgentsIds;
                $createTransferHistory->transfer_time = date('Y-m-d H:i:s');
                $createTransferHistory->status = 0; // 0 -> No , 1 -> Yes
                $createTransferHistory->save();

                //call to node API
                $url = url('/') . ':3000/send-rooms';
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, '');
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                $server_output = curl_exec($ch);
                curl_close($ch);

                $response = ['agentId' => $fromAgentId, 'chatRoomId' => $chatRoomId, 'status' => $status];
                return Response::json(array(
                    'status' => true,
                    'code' => 200,
                    'response' => $response,
                    'error' => false,
                    'message' => 'Transfer to a new Agent!'
                ));
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'error' => true,
                    'message' => 'Department Not Found !'
                ));
            }
        } elseif ($toAgentId != "" && $fromAgentId != "") {

            $getMessageAgentTrackId = MessageAgentTrack::where('agent_id', $fromAgentId)->where('chat_room_id', $chatRoomId)->where('widget_id', $widgetUuid)->select('id', 'message_id')->first();
            $updateAgentFromMessageAgentTrack = MessageAgentTrack::where('agent_id', $fromAgentId)->where('chat_room_id', $chatRoomId)->where('widget_id', $widgetUuid)->update(['agent_id' => $toAgentId, 'status' => 1]);
            /** Save transfer agent log */
            $createTransferLog = new AgentTransferLog;
            $createTransferLog->message_agent_track_id = $getMessageAgentTrackId->id;
            $createTransferLog->transfer_from_agent_id = $fromAgentId;
            $createTransferLog->transfer_to_agent_id = $toAgentId;
            $createTransferLog->status = 1; //active
            $createTransferLog->save();

            $getLastChatThreadId = ChatThread::where('user_id', $fromAgentId)->where('message_log_id', $getMessageAgentTrackId->message_id)->max('id');        // find the last chatThread id

            /** Save to transfer History */
            $createTransferHistory = new AgentTransferHistory;
            $createTransferHistory->message_agent_track_id = $getMessageAgentTrackId->id;
            $createTransferHistory->transfer_from_agent_id = $fromAgentId;
            $createTransferHistory->transfer_to_agent_id = null;
            $createTransferHistory->chat_room_id = $chatRoomId;
            $createTransferHistory->last_chat_thread_id = $getLastChatThreadId;
            $createTransferHistory->message_id = $getMessageAgentTrackId->message_id;
            $createTransferHistory->transfer_time = date('Y-m-d H:i:s');
            $createTransferHistory->other_agent_ids = $toAgentId;
            $createTransferHistory->status = 0; // 0 -> No , 1 -> Yes
            $createTransferHistory->save();
            // \Log::info('$createTransferHistory ---> '.printf($createTransferHistory,true));

            $this->sendNotificationToAgents($toAgentId, $widgetUuid);
            $response = ['agentId' => $fromAgentId, 'chatRoomId' => $chatRoomId, 'status' => $status];

            //call to node API
            $url = url('/') . ':3000/send-rooms';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, '');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $server_output = curl_exec($ch);
            curl_close($ch);

            return Response::json(array(
                'status' => true,
                'code' => 200,
                'response' => $response,
                'error' => false,
                'message' => 'Transfer to a new Agent!'
            ));
        } else {

            return Response::json(array(
                'status' => true,
                'code' => 400,
                'response' => [],
                'error' => false,
                'message' => 'Sorry Department and Agent are not there !'
            ));
        }

    }

    /**
     * function to resolve chat from agent
     *
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resolveChat($checkMessageAgentTrack)
    {
        $messageAgentTrackId = $checkMessageAgentTrack->id;
        $agentId = $checkMessageAgentTrack->agent_id;
        $widgetUuid = $checkMessageAgentTrack->widget_id;
        $chatRoomId = $checkMessageAgentTrack->chat_room_id;
        $messageId = $checkMessageAgentTrack->message_id;
        $messageForwardCountId = $checkMessageAgentTrack->message_forward_counter_id;
        $status = 5;    //resolve Scenario

        $updateMessageAgentTrack = MessageAgentTrack::where('id', $messageAgentTrackId)->update(['status' => $status]);

        //$deleteOtherAgents  = MessageAgentTrack::where('agent_id','!=',$agentId)->where('widget_id',$widgetUuid)->where('message_id',$messageId)->where('chat_room_id',$chatRoomId)->delete();

        $updateMessageTrack = MessageTrack::where('message_id', $messageId)->update(['agent_id' => $agentId, 'status' => $status]);

        $updateMessageTrack = MessageLog::where('id', $messageId)->update(['user_id' => $agentId, 'status' => $status]);

        $updateMessageForwardCounter = MessageForwardCounter::where('id', $messageForwardCountId)->update(['status' => $status]);

        $response = ['agentId' => $agentId, 'chatRoomId' => $chatRoomId, 'status' => $status];

        return Response::json(array(
            'status' => true,
            'code' => 200,
            'error' => true,
            'response' => $response,
            'message' => 'Agent and chatroom !'
        ));
    }

    /**
     * function for getting all the agent list with all the chatrooms and existing chats
     * chat Status 1=>  initiate 2=>Accept 3=>Reject  4=>Transfer  5=>Resolve
     * @param Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function agentWithChatRooms()
    {
        $agentsList = MessageAgentTrack::where('id', '!=', "")->get();

        $AgentCreateArray = array();
        foreach ($agentsList as $agent) {
            $AgentCreateArray[$agent->agent_id] = "agent";
        }
        $allAgents = [];
        foreach ($AgentCreateArray as $AgentId => $list) {

            $rooms = MessageAgentTrack::where('agent_id', $AgentId)->with('clientInfo.clientName', 'allChat.agentInfo', 'getTransferLog')->orderBy('id', 'desc')->get();
            /** get chat of all agents*/

            $allRooms = [];
            $agents['agent_id'] = $AgentId;
            foreach ($rooms as $room) {

                $agentRooms['name'] = $room->chat_room_id;
                $agentRooms['status'] = $room->status;
                $agentRooms['chat_time'] = $room->created_at;
                if ($room->clientInfo->clientName->name != "") {
                    $agentRooms['client_name'] = $room->clientInfo->clientName->name;
                } else {
                    $agentRooms['client_name'] = $room->clientInfo->clientName->phone;
                }
                $getTransferChats = AgentTransferHistory::where('chat_room_id', $room->chat_room_id)->orderBy('created_at','DESC')->get();
                if (count($getTransferChats) > 0) {
                    $getAgentName = Users::where('id', $getTransferChats[0]->transfer_from_agent_id)->select('first_name', 'last_name')->first();
                    $agentRooms['transfer_from_agent'] = $getAgentName->first_name . ' ' . $getAgentName->last_name;
                    $agentRooms['transferred'] = true;
                } else {
                    $agentRooms['transfer_from_agent'] = '';
                    $agentRooms['transferred'] = false;
                }
                /*if (isset($room->getTransferLog)) {
                    foreach ($room->getTransferLog as $agentKey => $agentValue) {
                        $getAgentName = Users::where('id', $agentValue->transfer_from_agent_id)->select('first_name', 'last_name')->first();
                        $agentRooms['transfer_from_agent'] = $getAgentName->first_name . ' ' . $getAgentName->last_name;
                    }
                }*/
                $agentRooms['chats'] = array();
                foreach ($room->allChat as $key => $chat) {
                    $agentRooms['chats'][$key]['message'] = $chat->chat_thread;
                    $agentRooms['chats'][$key]['direction'] = $chat->direction;
                    $agentRooms['chats'][$key]['roomNo'] = $room->chat_room_id;
                    $agentRooms['chats'][$key]['isMMS'] = $chat->is_mms;
                    $agentRooms['chats'][$key]['fileType'] = $chat->file_type;
                    $agentRooms['chats'][$key]['fileUrl'] = $chat->file_url;
                    if ($chat->direction == 1) {
                        if ($room->clientInfo->clientName->name != "") {
                            $agentRooms['chats'][$key]['user'] = $room->clientInfo->clientName->name;
                        } else {
                            $agentRooms['chats'][$key]['user'] = $room->clientInfo->clientName->phone;
                        }
                    }
                    if ($chat->direction == 2) {
                        $agentRooms['chats'][$key]['user'] = $chat->agentInfo->first_name;
                    }
                    $agentRooms['chats'][$key]['created_at'] = $chat->created_at;
                }
                $allRooms[] = $agentRooms;

            }
            $agents['rooms'] = $allRooms;
            $allAgents[] = $agents;
        }

        return Response::json(array(
            'status' => true,
            'error' => false,
            'code' => 200,
            'response' => $allAgents,
            'message' => 'Agents with chatrooms !'
        ));
    }

    /**
     * function to handel file upload from the chat
     * @param Request $request
     * @return mixed
     */
    public function uploadFile(Request $request)
    {
        try {
            $model = new File();

            $file = $request->file('file');
            $filename = $file->getClientOriginalName();
            $ext = $file->getClientOriginalExtension();
            $without_ext = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);
            $filenameNew = str_slug(strtolower($without_ext)) . '-' . time() . '.' . $ext;
            $type = $this->getType($ext);


            if (Storage::putFileAs('/public/uploads/', $file, $filenameNew)) {
                $model::create([
                    'name' => $filenameNew,
                    'type' => $type,
                    'extension' => $ext
                ]);
            }
            return Response::json(array(
                'status' => true,
                'code' => 200,
                'response' => [
                    'url' => url('/') . Storage::url('uploads/' . $filenameNew),
                    'type' => $type
                ],
                'error' => false,
                'message' => 'File Uploaded'
            ));
        } catch (\Exception $e) {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => $e->getMessage()
            ));
        } catch (ModelNotFoundException $e) {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => $e->getMessage()
            ));
        }
    }

    /**
     * Get all extensions
     * @return array Extensions of all file types
     */
    private function allExtensions()
    {
        return array_merge($this->image_ext, $this->audio_ext, $this->video_ext, $this->document_ext);
    }

    /**
     * Get type by extension
     * @param  string $ext Specific extension
     * @return string      Type
     */
    private function getType($ext)
    {
        if (in_array($ext, $this->image_ext)) {
            return 'image';
        }

        if (in_array($ext, $this->audio_ext)) {
            return 'audio';
        }

        if (in_array($ext, $this->video_ext)) {
            return 'video';
        }

        if (in_array($ext, $this->document_ext)) {
            return 'document';
        }
    }

    /**
     * initiate chat from the dashboard
     * @param Request $request
     * @return mixed
     */
    public function initiateChatWithAgent(Request $request)
    {
        try {
            $toNumber = '+1' . $request->to;
            $body = $request->body;
            $file = $request->file;
            $fileUrl = $request->fileUrl;
            $fileType = $request->fileType;
            $widgetUIID = $request->widget_uuid;
            $userId = $request->userId;
            $name = '';
            $email = '';

            $getWidgetData = Widgets::where('widget_uuid', $widgetUIID)->with('twilioNumbers')->first();
            if (count($getWidgetData->widgetDepartment) > 0) {
                $fromNumber = $getWidgetData->twilioNumbers->prefix . $getWidgetData->twilioNumbers->number;
            } else {
                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'error' => true,
                    'message' => 'Widget not found'
                ));
            }
            $departmentAgentMap = DepartmentAgentMap::where('user_id', $userId)->first();
            if ($departmentAgentMap) {
                $saveMessageTrack = new MessageTrack;
                $saveMessageTrack->widget_id = $widgetUIID;
                $saveMessageTrack->department_id = $departmentAgentMap->department_id;
                $saveMessageTrack->from_phone_number = $toNumber;
                $saveMessageTrack->message_type = 1; // Message type 1 ->Mobile SMS 2->Web Chat Message
                $saveMessageTrack->status = 1;
                if ($saveMessageTrack->save()) {

                    $responsesaveContactList = $this->saveContactList($widgetUIID, $toNumber, $name, $email);
                    if ($responsesaveContactList != 0) {
                        $responsesaveMessageLog = $this->saveMessageLog($responsesaveContactList, $widgetUIID);
                        if ($responsesaveMessageLog != false) {

                            $updateMessageTrack = MessageTrack::where('id', $saveMessageTrack->id)->update(['message_id' => $responsesaveMessageLog]);

                            // $chatRoomId = $this->chatProcess($toNumber, $widgetUIID,1);   //calling chat process
                            /** saving and inicating chat process */
                            $checkMessageTrack = MessageTrack::where('widget_id', $widgetUIID)->where('from_phone_number', $toNumber)->whereIn('status', [1, 6])->first();

                            if (count($checkMessageTrack) != 0) {
                                $chatRoomId = $this->generateRandomString();
                                $checkMessageTrack->chat_room_id = $chatRoomId;
                                if ($checkMessageTrack->update()) {
                                    $departmentId = $checkMessageTrack->department_id;
                                    $messageId = $checkMessageTrack->message_id;
                                    $countAgentDepartment = DepartmentAgentMap::where('department_id', $departmentId)->count();
//                                    $responsesaveMessageForwardCount = $this->saveMessageForwardCount($widgetUuid, $countAgentDepartment, $messageId);
//                                    if ($responsesaveMessageForwardCount != false) {
//
//                                        $this->saveMessageAgentTrack($responsesaveMessageForwardCount, $chatRoomId, $widgetUuid, $messageId, $departmentId);
//                                    }
                                    // save message forward
                                    if ($widgetUIID != "" && $countAgentDepartment != "" && $messageId != "") {

                                        $saveMessageForwardCount = new MessageForwardCounter;
                                        $saveMessageForwardCount->widget_id = $widgetUIID;
                                        $saveMessageForwardCount->agent_count = $countAgentDepartment;
                                        $saveMessageForwardCount->count_init = 1;
                                        $saveMessageForwardCount->message_id = $messageId;
                                        $saveMessageForwardCount->status = 2;
                                        if ($saveMessageForwardCount->save()) {
                                            // return $saveMessageForwardCount->id;

                                            if ($saveMessageForwardCount->id != "" && $chatRoomId != "" && $widgetUIID != "" && $messageId != "" && $departmentId != "") {

                                                $getAllAgentId = DepartmentAgentMap::where('department_id', $departmentId)->select('user_id')->get();
                                                if (count($getAllAgentId) != 0) {
                                                    // foreach ($getAllAgentId as $agentId) {
                                                    $saveMessageAgentTrack = new MessageAgentTrack;
                                                    $saveMessageAgentTrack->agent_id = $userId;
                                                    $saveMessageAgentTrack->message_id = $messageId;
                                                    $saveMessageAgentTrack->chat_room_id = $chatRoomId;
                                                    $saveMessageAgentTrack->widget_id = $widgetUIID;
                                                    $saveMessageAgentTrack->message_forward_counter_id = $saveMessageForwardCount->id;
                                                    $saveMessageAgentTrack->status = 2;
                                                    if ($saveMessageAgentTrack->save()) {
                                                        $responseMessageCacheId = $this->saveMessageCache($toNumber, $widgetUIID);  // save to message cache
                                                        $updateStatus = MessageCache::where('id', $responseMessageCacheId)->update(['status' => 2]);
                                                        $this->saveMessageCacheData($body, $responseMessageCacheId, $file, $fileType, $fileUrl);        // save to message cache data
                                                        $updateMEssageCacheData = MessageCacheData::where('message_cache_id', $responseMessageCacheId)->update(['copy' => 2]);
                                                    }

                                                } else {
                                                    return false;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            /** end of inicating */
                            $saveChatThread = new ChatThread;
                            $saveChatThread->message_log_id = $responsesaveMessageLog;
                            $saveChatThread->widget_id = $widgetUIID;
                            $saveChatThread->chat_thread = $body;
                            $saveChatThread->type = '1';
                            $saveChatThread->user_id = $userId;
                            $saveChatThread->direction = '2';
                            $saveChatThread->chat_type = '1';
                            $saveChatThread->is_mms = $file;
                            $saveChatThread->file_type = $fileType;
                            $saveChatThread->file_url = $fileUrl;
                            if ($saveChatThread->save()) {
                                //call to node API
                                $getChatInfo = MessageTrack::where('message_id', $responsesaveMessageLog)->select('agent_id', 'chat_room_id', 'status')->first();
                                if ($getChatInfo) {
                                    /** call to node API for sending this message to the frontend chat secticon */
                                    $time = date("Y-m-d H:i:s");
                                    $url = url('/') . ':3000/mobile-chat';
                                    $ch = curl_init();
                                    curl_setopt($ch, CURLOPT_URL, $url);
                                    curl_setopt($ch, CURLOPT_POST, 1);
                                    curl_setopt($ch, CURLOPT_POSTFIELDS,
                                        "messageBody=$body&direction=2&user=$toNumber&chatRoomId=$getChatInfo->chat_room_id&time=$time&callFrom=shelf");

                                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                                    $server_output = curl_exec($ch);
                                    curl_close($ch);
                                }
                                $updateMessageTrack = MessageTrack::where('id', $saveMessageTrack->id)->update(['status' => 2, 'agent_id' => $userId]);
                                $updateMessageLog = MessageLog::where('id', $responsesaveContactList)->update(['status' => 2]);
                                $updateAgentMessageTruct = MessageAgentTrack::where('agent_id', $userId)
                                    ->where('message_id', $responsesaveMessageLog)->where('chat_room_id', $chatRoomId)->update(['status' => 2]);
                                $this->sendSms($body, $toNumber, $fromNumber, $file, $fileType, $fileUrl);
                                return Response::json(array(
                                    'status' => true,
                                    'code' => 200,
                                    'response' => [],
                                    'error' => false,
                                    'message' => 'Message Saved'
                                ));
                            } else {
                                return Response::json(array(
                                    'status' => false,
                                    'code' => 400,
                                    'response' => [],
                                    'error' => true,
                                    'message' => 'message not saved'
                                ));
                            }


                        } else {

                        }
                    } else {

                    }
                } else {

                }
            } else {
                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'error' => true,
                    'message' => 'Department not found'
                ));
            }
        } catch (\Exception $e) {
            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => $e->getMessage()
            ));
        }
    }


    /**
     * Function to get all closed / resolved for an agent
     * @param Request $request
     * @return mixed
     */
    public function getAllClosedChats(Request $request)
    {
        if ($request->agentId) {
            $transferedChats = AgentTransferHistory::where('transfer_from_agent_id', $request->agentId)->where('status', 1)->get();
            $transferedRoomDetails = [];
            foreach ($transferedChats as $key => $transferedChat) {
                if (array_key_exists($transferedChat->chat_room_id, $transferedRoomDetails)) {
                    if ($transferedRoomDetails[$transferedChat->chat_room_id] < $transferedChat->last_chat_thread_id) {
                        $transferedRoomDetails[$transferedChat->chat_room_id] = $transferedChat->last_chat_thread_id;
                    }
                } else {
                    $transferedRoomDetails[$transferedChat->chat_room_id] = $transferedChat->last_chat_thread_id;
                }
            }
            $chatRoomsDetails = [];
            foreach ($transferedRoomDetails as $key => $transferedRoomDetail) {
                $chatRooms = [];
                $agentId = $request->agentId;
                $messageAgentTract = MessageAgentTrack::where('chat_room_id', $key)->with('clientInfo.clientName', 'allChat.agentInfo')->where(function ($query) use ($agentId) {
                    $query->where('agent_id', '!=', $agentId)->orWhere('status', '!=', 5);
                })->first();
                if ($messageAgentTract) {
                    $chatThreads = ChatThread::where('message_log_id', $messageAgentTract->message_id)->orderBy('id', 'ASC')->get();
                    $chatRooms['name'] = (string)$key;
                    $chatRooms['status'] = $messageAgentTract->status;
                    $chatRooms['chat_time'] = $messageAgentTract->created_at;
                    if ($messageAgentTract->clientInfo->clientName->name != "") {
                        $chatRooms['client_name'] = $messageAgentTract->clientInfo->clientName->name;
                    } else {
                        $chatRooms['client_name'] = $messageAgentTract->clientInfo->clientName->phone;
                    }
                    foreach ($chatThreads as $chatKey => $chatThread) {
                        if ($chatThread->id <= $transferedRoomDetail) {
                            $chatRooms['chats'][$chatKey]['message'] = $chatThread->chat_thread;
                            $chatRooms['chats'][$chatKey]['direction'] = $chatThread->direction;
                            $chatRooms['chats'][$chatKey]['roomNo'] = (string)$key;
                            $chatRooms['chats'][$chatKey]['isMMS'] = $chatThread->is_mms;
                            $chatRooms['chats'][$chatKey]['fileType'] = $chatThread->file_type;
                            $chatRooms['chats'][$chatKey]['fileUrl'] = $chatThread->file_url;
                            if ($chatThread->direction == 1) {
                                if ($messageAgentTract->clientInfo->clientName->name != "") {
                                    $chatRooms['chats'][$chatKey]['user'] = $messageAgentTract->clientInfo->clientName->name;
                                } else {
                                    $chatRooms['chats'][$chatKey]['user'] = $messageAgentTract->clientInfo->clientName->phone;
                                }
                            }
                            if ($chatThread->direction == 2) {
                                $chatRooms['chats'][$chatKey]['user'] = $chatThread->agentInfo->first_name;
                            }
                            $chatRooms['chats'][$chatKey]['created_at'] = $chatThread->created_at;
                        }
                    }
                    $chatRoomsDetails[] = $chatRooms;
                }
            }
            $rooms = MessageAgentTrack::where('agent_id', $request->agentId)->with('clientInfo.clientName', 'allChat.agentInfo')->where('status', 5)->orderBy('id', 'desc')->get();

            $allRooms = [];
            $agents['agent_id'] = $request->agentId;
            foreach ($rooms as $room) {
                $agentRooms['name'] = $room->chat_room_id;
                $agentRooms['status'] = $room->status;
                $agentRooms['chat_time'] = $room->created_at;
                if ($room->clientInfo->clientName->name != "") {
                    $agentRooms['client_name'] = $room->clientInfo->clientName->name;
                } else {
                    $agentRooms['client_name'] = $room->clientInfo->clientName->phone;
                }
                $agentRooms['chats'] = array();
                foreach ($room->allChat as $key => $chat) {
                    $agentRooms['chats'][$key]['message'] = $chat->chat_thread;
                    $agentRooms['chats'][$key]['direction'] = $chat->direction;
                    $agentRooms['chats'][$key]['roomNo'] = $room->chat_room_id;
                    $agentRooms['chats'][$key]['isMMS'] = $chat->is_mms;
                    $agentRooms['chats'][$key]['fileType'] = $chat->file_type;
                    $agentRooms['chats'][$key]['fileUrl'] = $chat->file_url;
                    if ($chat->direction == 1) {
                        if ($room->clientInfo->clientName->name != "") {
                            $agentRooms['chats'][$key]['user'] = $room->clientInfo->clientName->name;
                        } else {
                            $agentRooms['chats'][$key]['user'] = $room->clientInfo->clientName->phone;
                        }
                    }
                    if ($chat->direction == 2) {
                        $agentRooms['chats'][$key]['user'] = $chat->agentInfo->first_name;
                    }
                    $agentRooms['chats'][$key]['created_at'] = $chat->created_at;
                }
                $allRooms[] = $agentRooms;

            }
            $agents['rooms'] = $allRooms;
            $closedChats = array_merge($allRooms, $chatRoomsDetails);
            return Response::json(array(
                'status' => true,
                'error' => false,
                'code' => 200,
                'response' => $closedChats,
                'message' => 'Agents with chatrooms !'
            ));
        } else {
            return Response::json(array(
                'status' => false,
                'error' => true,
                'code' => 400,
                'response' => [],
                'message' => 'No Chant found !'
            ));
        }
    }


}
