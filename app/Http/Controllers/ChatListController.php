<?php

namespace App\Http\Controllers;

use App\Model\DepartmentAgentMap;
use App\Model\MessageAgentTrack;
use App\Model\TwilioNumber;
use App\Model\UserToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
use App\Model\AgentTransferHistory;
use App\Http\Controllers\TwilioController;
use Helper;
use Twilio\Rest\Client;                         /* Twilio REST client */

use App\Exceptions\EntityConflictException;
use App\Exceptions\HttpBadRequestException;
use Illuminate\Database\QueryException;

class ChatListController extends Controller
{
    public function agentDepartmentList(Request $request)
    {
        $chatRoomId = $request->chatRoomId;
        if ($chatRoomId != "") {
            $getDepartmentDetails = MessageAgentTrack::where('chat_room_id', $chatRoomId)->with('getWidget.widgetDepartment.departmentDetails.departmentAgents.agentDetails')->first();
            $userId = $getDepartmentDetails->agent_id;
            $agentDepartmentData = [];

            if (count($getDepartmentDetails) != 0) {
                foreach ($getDepartmentDetails->getWidget->widgetDepartment as $key => $data) {
                    $agentDepartmentData[$key]['department_id'] = $data->departmentDetails->id;
                    $agentDepartmentData[$key]['department_name'] = $data->departmentDetails->department_name;
                    $agentArray = [];
                    foreach ($data->departmentDetails->departmentAgents as $newData) {
                        $agentArr = [];
                        foreach ($newData->agentDetails as $agent_key => $agentDetail) {
                            $agentArr['agent_id'] = $agentDetail->id;
                            $agentArr['first_name'] = $agentDetail->first_name;
                            $agentArr['last_name'] = $agentDetail->last_name;
                            $agentArray[] = $agentArr;
                        }

                    }
                    $agentDepartmentData[$key]['agent'] = $agentArray;
                }
                $response = array('code' => 200, 'error' => false, 'response' => $agentDepartmentData, 'status' => true, 'message' => 'Agent Department List !');
            } else {
                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Data Found !');
            }
        } else {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Invalid Data !');
        }
        return Response()->json($response);
    }

    public function getContactList(Request $request)
    {
        $agentId = $request->agentId;
        if ($agentId != "") {

            $allClientNames = MessageAgentTrack::where('agent_id', $agentId)->with('clientInfo.clientName')->where('status', '!=', 3)->get();
            $clientNamesArr = [];
            foreach ($allClientNames as $key => $value) {
                if (isset($value->clientInfo->clientName)) {
                    $clientNamesArr[$key]['name'] = $value->clientInfo->clientName->name;
                    $clientNamesArr[$key]['email'] = $value->clientInfo->clientName->email;
                    $clientNamesArr[$key]['phone'] = $value->clientInfo->clientName->phone;
                }
            }

            $clientNames = array();
            $i = 0;
            $key_array = array();
            $key = 'phone';
            foreach ($clientNamesArr as $val) {
                if (!in_array($val[$key], $key_array)) {
                    $key_array[$i] = $val[$key];
                    $clientNames[] = $val;
                }
                $i++;
            }

            if (count($clientNames) != 0) {

                $response = array('code' => 200, 'error' => false, 'response' => $clientNames, 'status' => true, 'message' => 'List of client names !');
            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Client Found !');
            }
        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Invalid Token !');
        }

        return Response()->json($response);
    }

    /**
     * Get Chat of a specific agent
     * @param Request $request
     * @return mixed
     */
    public function agentWithAllChats(Request $request)
    {
        $agentId = $request->agentId;
        $allAgents = [];

        $rooms = MessageAgentTrack::where('agent_id', $agentId)->with('clientInfo.clientName', 'allChat.agentInfo')->orderBy('id', 'desc')->get();
        $allRooms = [];
        $agents['agent_id'] = $agentId;
        foreach ($rooms as $room) {
            $agentRooms['name'] = $room->chat_room_id;
            $agentRooms['status'] = $room->status;
            if ($room->clientInfo->clientName->name != "") {
                $agentRooms['client_name'] = $room->clientInfo->clientName->name;
            } else {
                $agentRooms['client_name'] = $room->clientInfo->clientName->phone;
            }
            $agentRooms['chat_time'] = $room->created_at;
            $agentRooms['chats'] = array();
            foreach ($room->allChat as $key => $chat) {

                $agentRooms['chats'][$key]['message'] = $chat->chat_thread;
                $agentRooms['chats'][$key]['direction'] = $chat->direction;
                $agentRooms['chats'][$key]['roomNo'] = $room->chat_room_id;
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
        //$agents['rooms'] = $allRooms;
        //$allAgents[] = $agents;

        return Response::json(array(
            'status' => true,
            'error' => false,
            'code' => 200,
            'response' => $allRooms,
            'message' => 'Agents with chatrooms !'
        ));
    }

    /**
     * Get All chat List
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllAgentChats(Request $request)
    {
        $userToken = $request->token;

        if ($userToken != '') { //Get agent list of an admin

            $checkToken = UserToken::where('token', $userToken)->with('userInfo')->first();
            if (count($checkToken) != "" && $checkToken->userInfo->type == 2) {

                $getAgents = Users::where('parent_id', $checkToken->userInfo->id)->with('departmentAgentMapping.departmentDetails', 'getCompany')->orderBy('created_at', 'desc')->get();
            } else {  // Get all agents

                $getAgents = Users::where('type', 3)->with('departmentAgentMapping.departmentDetails', 'getCompany')->orderBy('created_at', 'desc')->get();
            }

            if (count($getAgents) != 0) {
                $liveCount = 0;
                $rejectedCount = 0;
                $closedCount = 0;
                $data = [];
                foreach ($getAgents as $keyAgent => $getAgent) {
                    $data[$keyAgent]['agent'] = $getAgent;
                    $agentId = $getAgent->id;
                    $rooms = MessageAgentTrack::where('agent_id', $agentId)->with('clientInfo.clientName', 'allChat.agentInfo')->orderBy('id', 'desc')->get();
                    $allRooms = [];
                    $agents['agent_id'] = $agentId;
                    $live = false;
                    $closed = false;
                    $rejected = false;
                    foreach ($rooms as $key1 => $room) {
                        if ($room->status == '2') {
                            $live = true;
                            $liveCount++;
                        } elseif ($room->status == '3') {
                            $rejected = true;
                            $rejectedCount++;
                        } elseif ($room->status == '5') {
                            $closed = true;
                            $closedCount++;
                        }
                        $agentRooms['name'] = $room->chat_room_id;
                        $agentRooms['status'] = $room->status;
                        if ($room->clientInfo->clientName->name != "") {
                            $agentRooms['client_name'] = $room->clientInfo->clientName->name;
                        } else {
                            $agentRooms['client_name'] = $room->clientInfo->clientName->phone;
                        }
                        $agentRooms['chat_time'] = $room->created_at;
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
                    $data[$keyAgent]['chat'] = $allRooms;
                    $data[$keyAgent]['liveStatus'] = $live;
                    $data[$keyAgent]['rejectedStatus'] = $rejected;
                    $data[$keyAgent]['closedStatus'] = $closed;
                }
                $response = array('code' => 200, 'error' => false, 'response' => $data, 'status' => true, 'message' => 'List of Agents with chat !');

            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Agent Found !');

            }

        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Invalid Token !');

        }

        return Response()->json($response);
    }

    /**
     * function to fetch only closed chats with respect to the admin and superadmin
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAgentsClosedChats(Request $request){
        $userToken = $request->token;

        if ($userToken != '') { //Get agent list of an admin

            $checkToken = UserToken::where('token', $userToken)->with('userInfo')->first();
            if (count($checkToken) != "" && $checkToken->userInfo->type == 2) {

                $getAgents = Users::where('parent_id', $checkToken->userInfo->id)->with('departmentAgentMapping.departmentDetails', 'getCompany')->orderBy('created_at', 'desc')->get();
            } else {  // Get all agents

                $getAgents = Users::where('type', 3)->with('departmentAgentMapping.departmentDetails', 'getCompany')->orderBy('created_at', 'desc')->get();
            }

            if (count($getAgents) != 0) {
                $liveCount = 0;
                $rejectedCount = 0;
                $closedCount = 0;
                $live = false;
                $closed = false;
                $rejected = false;
                $data = [];
                foreach ($getAgents as $keyAgent => $getAgent) {
                    $data[$keyAgent]['agent'] = $getAgent;
                    $agentId = $getAgent->id;
                    /** new part */
                    $transferedChats = AgentTransferHistory::where('transfer_from_agent_id', $agentId)->where('status', 1)->get();
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
                        // $agentId = $request->agentId;
                        $messageAgentTract = MessageAgentTrack::where('chat_room_id', $key)->with('clientInfo.clientName', 'allChat.agentInfo')->where(function ($query) use ($agentId) {
                            $query->where('agent_id','!=',$agentId)->orWhere('status','!=',5);
                        })->first();
                        if ($messageAgentTract) {
                            $closed = true;
                            $closedCount++;
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
                    /** new part end */
//                    $data[$keyAgent]['agent'] = $getAgent;
//                    $agentId = $getAgent->id;
                    $rooms = MessageAgentTrack::where('agent_id', $agentId)->with('clientInfo.clientName', 'allChat.agentInfo')->where('status', 5)->orderBy('id', 'desc')->get();
                    $allRooms = [];
                    $agents['agent_id'] = $agentId;
                    foreach ($rooms as $key1 => $room) {
                        if ($room->status == '2') {
                            $live = true;
                            $liveCount++;
                        } elseif ($room->status == '3') {
                            $rejected = true;
                            $rejectedCount++;
                        } elseif ($room->status == '5') {
                            $closed = true;
                            $closedCount++;
                        }
                        $agentRooms['name'] = $room->chat_room_id;
                        $agentRooms['status'] = $room->status;
                        if ($room->clientInfo->clientName->name != "") {
                            $agentRooms['client_name'] = $room->clientInfo->clientName->name;
                        } else {
                            $agentRooms['client_name'] = $room->clientInfo->clientName->phone;
                        }
                        $agentRooms['chat_time'] = $room->created_at;
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
                    $data[$keyAgent]['chat'] = array_merge($allRooms, $chatRoomsDetails);
                    $data[$keyAgent]['liveStatus'] = $live;
                    $data[$keyAgent]['rejectedStatus'] = $rejected;
                    $data[$keyAgent]['closedStatus'] = $closed;
                }
                $response = array('code' => 200, 'error' => false, 'response' => $data, 'status' => true, 'message' => 'List of Agents with chat !');

            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Agent Found !');

            }

        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Invalid Token !');

        }

        return Response()->json($response);
    }


}
