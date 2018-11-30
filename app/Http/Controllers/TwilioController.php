<?php
/**
* TwilioController to manage CRUD operation of Twilio account and sub-account.
* @param Request $request
*/
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth,Mail,Hash;
use Illuminate\Support\Facades\Log;
use Response;
use App\Model\UserToken;              /* User Token Model */
use App\Model\Users;                /* User Model */
use App\Model\TwilioCredentials;  /* Twilio Credentials Model */
use Twilio\Rest\Client; /* Twilio REST client */
use Helper;
use App\Model\Widgets;
use App\Model\TwilioNumber;


class TwilioController extends Controller
{

  /**
  * create / update Twilio Information of a Superadmin
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */

  public function storeTwilioInformation(Request $request)
  {
    $userToken = $request->token; /**  userToken generated in login Time */
    $sid       = $request->twilio_sid; /** twilio_sid */
    $token     = $request->twilio_token; /** twilio_token */
    $getUser   = UserToken::where('token',$userToken)->with('userInfo')->first();

    if(count($getUser) != 0 ){

        $client  = new Client($sid, $token);
        $account = $client->api->accounts($sid)->fetch();

        if(count($account)!=0){
            /** check for existing account */
            $checkTwilioAccount = TwilioCredentials::where('user_id',$getUser->profile_user_id)->first();
            if($checkTwilioAccount){
                /** update twilio information */
                $checkTwilioAccount->user_id              = $getUser->profile_user_id;
                $checkTwilioAccount->twilio_friendly_name = $account->friendlyName;
                $checkTwilioAccount->twilio_sid           = $sid;
                $checkTwilioAccount->twilio_token         = $token;
                $checkTwilioAccount->status               = $account->status;
                $checkTwilioAccount->type                 = $getUser->userInfo->type;

                if($checkTwilioAccount->save()){

                    return  Response::json(array(
                        'error'   => false,
                        'status'  => true,
                        'code'    => 200,
                        'response'=> $checkTwilioAccount,
                        'message' => 'Twilio Credentials Updated !'
                    ));

                } else {
                    return  Response::json(array(
                        'error'   => true,
                        'status'  => false,
                        'code'    => 400,
                        'response'=> [],
                        'message' => 'Sorry,Twilio Credentials not Updated try again later !'
                    ));
                }
            }else{
                /** create new twilio credential */
                $saveTwilioCredential                       = new TwilioCredentials;
                $saveTwilioCredential->user_id              = $getUser->profile_user_id;
                $saveTwilioCredential->twilio_friendly_name = $account->friendlyName;
                $saveTwilioCredential->twilio_sid           = $sid;
                $saveTwilioCredential->twilio_token         = $token;
                $saveTwilioCredential->status               = $account->status;
                $saveTwilioCredential->type                 = $getUser->userInfo->type;

                if($saveTwilioCredential->save()){

                    return  Response::json(array(
                        'error'   => false,
                        'status'  => true,
                        'code'    => 200,
                        'response'=> $saveTwilioCredential,
                        'message' => 'Twilio Credentials Save !'
                    ));

                } else {
                    return  Response::json(array(
                        'error'   => true,
                        'status'  => false,
                        'code'    => 400,
                        'response'=> [],
                        'message' => 'Sorry,Twilio Credentials not Saved try again later !'
                    ));
                }
            }
        }
      } else {

          return Response::json(array(
              'error'   => true,
              'status'  => false,
              'code'    => 400,
              'response'=> [],
              'message' => 'No User Found !'
          ));

      }
  }

  /**
  * Get Twilio Information of an user
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */
  public function getTwilioInformation(Request $request)
  {
    $userToken = $request->token;

    if($userToken !=""){

        $getUser = UserToken::where('token',$userToken)->with('userInfo')->first();

        if(count($getUser) != 0 ){
            if($getUser->userInfo->type == 1){
                $getTwilioCredentials = TwilioCredentials::where('type',1)->first();
            }else{
                $getTwilioCredentials = TwilioCredentials::where('user_id',$getUser->userInfo->id)->first();
            }


            if(count($getTwilioCredentials)!=0){

              return  Response::json(array(
                  'status'   => true,
                  'error'    => false,
                  'code'     => 200,
                  'response' => $getTwilioCredentials,
                  'message'  => 'Twilio Credentials !'
              ));

            } else {

              return  Response::json(array(
                  'error'   => true,
                  'status'  => false,
                  'code'    => 400,
                  'response'=> [],
                  'message' => 'Sorry Twilio Credentials no found !'
              ));

            }
        } else {

           return  Response::json(array(
              'error'   => true,
              'status'  => false,
              'code'    => 400,
              'response'=> [],
              'message' => 'Sorry user not found !'
           ));

        }
    } else {

      return  Response::json(array(
          'error'   => true,
          'status'  => false,
          'code'    => 400,
          'response'=> [],
          'message' => 'Please Provide a Token !'
      ));

    }
  }

  /**
  * create twilio information of an user
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */
  public function createTwilioSubacount(Request $request)
  {
    $userId                         = $request->userId;
    $FriendlyName                   = $request->email;
    $getSuperAdminTwilioCredentials = TwilioCredentials::where('type',1)->first();

    if(count($getSuperAdminTwilioCredentials)!=0){

      // Your Account Sid and Auth Token from twilio.com/user/account
      try {

        $sid     = $getSuperAdminTwilioCredentials->twilio_sid;
        $token   = $getSuperAdminTwilioCredentials->twilio_token;
        $client  = new Client($sid, $token);
        $account = $client->api->accounts->create(array(
            'FriendlyName' => $FriendlyName
        ));

        if(count($account)!=0){

          //store the data
          $saveTwilioCredentials                       = new TwilioCredentials;
          $saveTwilioCredentials->twilio_friendly_name = $account->friendlyName;
          $saveTwilioCredentials->twilio_sid           = $account->sid;
          $saveTwilioCredentials->twilio_token         = $account->authToken;
          $saveTwilioCredentials->user_id              = $userId;
          $saveTwilioCredentials->type                 = 2; //Admin Account
          $saveTwilioCredentials->status               = $account->status;

          if($saveTwilioCredentials->save()){

            return  Response::json(array(
                'code'    => 200,
                'error'   => false,
                'status'  => true,
                'response'=> $saveTwilioCredentials,
                'message' => 'Twilio Credentials Created !'
            ));

          } else {

            return  Response::json(array(
                'error'   => true,
                'status'  => false,
                'code'    => 400,
                'response'=> [],
                'message' => 'Sorry Twilio Credentials not Created !'
            ));

          }
        }
      }catch(\Exception $e){

        return  Response::json(array(
            'error'   => true,
            'code'    => 400,
            'status'  => false,
            'response'=> [],
            'message' => $e->getMessage()
        ));

        \Log::info('Exception ->'.$e->getMessage());

      }
    } else {

        return  Response::json(array(
            'error'   => true,
            'code'    => 400,
            'status'  => false,
            'response'=> [],
            'message' => 'Sorry Twilio Credentials not found !'
        ));

    }
  }

  /**
  * Suspend of twilio account of an user
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */
  public function suspandUserTwilioAccount(Request $request)
  {
    $userId                    = $request->userId;
    $getAdminTwilioCredentials = TwilioCredentials::where('user_id',$userId)->first();

    if( count($getAdminTwilioCredentials) !=0 ){

      try{

        $sid     = $getAdminTwilioCredentials->twilio_sid;
        $token   = $getAdminTwilioCredentials->twilio_token;
        $client  = new Client($sid, $token);
        $account = $client->api->accounts($sid)->update(array(
            'status' => 'suspended'
        ));

        if(count($account)!=0){

          //update the data
          $getAdminTwilioCredentials->twilio_friendly_name = $account->friendlyName;
          $getAdminTwilioCredentials->twilio_sid           = $account->sid;
          $getAdminTwilioCredentials->twilio_token         = $account->authToken;
          $getAdminTwilioCredentials->user_id              = $userId;
          $getAdminTwilioCredentials->type                 = 2; //Admin Account
          $getAdminTwilioCredentials->status               = $account->status;

          if($getAdminTwilioCredentials->update()){

            return  Response::json(array(
                'code'    => 200,
                'error'   => false,
                'status'  => true,
                'response'=> $getAdminTwilioCredentials,
                'message' => 'Twilio Credentials Updated !'
            ));

          } else {

            return  Response::json(array(
              'error'   => true,
              'status'  => false,
              'code'    => 400,
              'response'=> [],
              'message' => 'Sorry Twilio Credentials not Updated !'
            ));

          }
        }
      }catch(\Exception $e){

        return  Response::json(array(
            'error' => true,
            'code' => 400,
            'status' => false,
            'response'=> [],
            'message' => $e->getMessage()
        ));

        \Log::info('Exception ->'.$e->getMessage());

      }
    } else {

        return  Response::json(array(
          'error'   => true,
          'code'    => 400,
          'status'  => false,
          'response'=> [],
          'message' => 'Sorry Twilio Credentials not found !'
        ));
    }
  }

  /**
  * Reactive of users's twilio account
  * @param Request $request
  * @return \Illuminate\Http\JsonResponse
  */
  public function reactiveUserTwilioAccount(Request $request)
  {
    $userId                         = $request->userId;
    $getSuperAdminTwilioCredentials = TwilioCredentials::where('type',1)->first();
    $getAdminTwilioCredentials      = TwilioCredentials::where('user_id',$userId)->first();

    if(count($getSuperAdminTwilioCredentials)!=0 && count($getAdminTwilioCredentials) !=0 ){

      try{

        $sid         = $getAdminTwilioCredentials->twilio_sid;
        $token       = $getAdminTwilioCredentials->twilio_token;
        $masterSid   = $getSuperAdminTwilioCredentials->twilio_sid; //To Reactive a suspended twilio account we need the master Account credentials
        $masterToken = $getSuperAdminTwilioCredentials->twilio_token;
        $client      = new Client($masterSid, $masterToken);
        $account     = $client->api->accounts($sid)->update(array(
            'status' => 'active'
        ));

        if(count($account)!=0) {

          //update the data
          $getAdminTwilioCredentials->twilio_friendly_name = $account->friendlyName;
          $getAdminTwilioCredentials->twilio_sid           = $account->sid;
          $getAdminTwilioCredentials->twilio_token         = $account->authToken;
          $getAdminTwilioCredentials->user_id              = $userId;
          $getAdminTwilioCredentials->type                 = 2; //Admin Account
          $getAdminTwilioCredentials->status               = $account->status;

          if($getAdminTwilioCredentials->update()){

            return  Response::json(array(
                'code'    => 200,
                'error'   => false,
                'status'  => true,
                'response'=> $getAdminTwilioCredentials,
                'message' => 'Twilio Credentials Updated !'
            ));

          }else{

            return  Response::json(array(
                'error'   => true,
                'status'  => false,
                'code'    => 400,
                'response'=> [],
                'message' => 'Sorry Twilio Credentials not Updated !'
            ));

          }
        }
      } catch(\Exception $e){

        return  Response::json(array(
            'error'   => true,
            'code'    => 400,
            'status'  => false,
            'response'=> [],
            'message' => $e->getMessage()
        ));

        \Log::info('Exception ->'.$e->getMessage());

      }
    } else {

        return  Response::json(array(
          'error'   => true,
          'code'    => 400,
          'status'  => false,
          'response'=> [],
          'message' => 'Sorry Twilio Credentials not found !'
        ));

    }
  }
  /**
  * Validate Twilio Credentials of superadmin twilio account
  * @return \Illuminate\Http\JsonResponse
  */
  public function validateTwilioCredentials()
  {
    $getSuperAdminTwilioCredentials = TwilioCredentials::where('type',1)->where('status','active')->first();

    if( count($getSuperAdminTwilioCredentials) !=0 ) {

      return Response::json(array(
        'status'   => true,
      ));

    } else {

      return Response::json(array(
        'status'   => false,
      ));

    }
  }
  /**
  * Twilio Account and Subaccount list
  * @return \Illuminate\Http\JsonResponse
  */
  public function twilioAccountList()
  {
    $getTwilioAccountList = TwilioCredentials::with('userInfo')->get();

    if( count($getTwilioAccountList) !=0 ){

      return Response::json(array(
        'code'    => 200,
        'error'   => false,
        'status'  => true,
        'response'=> $getTwilioAccountList,
        'message' => 'Twilio Credential List !'
      ));

    } else {

      return Response::json(array(
        'code'    => 400,
        'error'   => false,
        'status'  => false,
        'response'=> [],
        'message' => 'Empty Twilio Credential List !'
      ));

    }
  }

  /**
  * Get Available Phone Numbers from Twilio
  * @params widgetId = integer, user_id = integer , area_code = integer
  * @return \Illuminate\Http\JsonResponse
  */
  public function getPurchasedPhoneNumber($widgetId, $userId, $areaCode)
  {
    $checkWidgets = Widgets::where('id',$widgetId)->first();
    $checkUser    = Users::where('id',$userId)->first();

    if(count($checkWidgets) == 0){

      return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Widgets not found !'));

    }

    // Check user is valid or not
    if (count($checkUser) == 0) {

      return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Users not found !'));

    }

    // Get Twilio Credentials
    $getTwilioCredentials = TwilioCredentials::where('user_id',$userId)->first();

    if(count($getTwilioCredentials)!=0){

        $sid      = $getTwilioCredentials->twilio_sid;
        $token    = $getTwilioCredentials->twilio_token;

        $client   = new Client($sid, $token);

        // Get Available Phone Numbers
        if ($areaCode == null) {

          $numbers = $client->availablePhoneNumbers('US')->local->read();                       /**    area_code is null */

        } else {
          $numbers = $client->availablePhoneNumbers('US')->local->read(

            array("areaCode" => $areaCode)  //if areaCode is there

          );
        }
        try {

          $selectedNumber  = $numbers[0]->phoneNumber;
          $purchasedNumber = $client->incomingPhoneNumbers->create(array("phoneNumber" => $selectedNumber));

        } catch (\Exception $e) {

          return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>$e->getMessage().'Error Line'.$e->getLine()));

        }

        $prefix          = substr($purchasedNumber->phoneNumber, 0, -10);  //get prefix of phone_number
        $phoneNumber     = substr($purchasedNumber->phoneNumber, -10); //phone_number
        $numberUnid      = substr( str_shuffle( str_repeat( 'abcdefghijklmnopqrstuvwxyz0123456789', 10 ) ), 0, 8 ); // generate numberunid

        // Saving Twilio number
        $twilioNumber                         = new TwilioNumber;
        $twilioNumber->user_id                = $userId;
        $twilioNumber->widget_id              = $widgetId;
        $twilioNumber->prefix                 = $prefix;
        $twilioNumber->number                 = $phoneNumber;
        $twilioNumber->twilio_number_sid      = $purchasedNumber->accountSid;
        $twilioNumber->twilio_sub_account_sid = $purchasedNumber->sid;
        $twilioNumber->twilio_credentials_id  = $getTwilioCredentials->id;
        $twilioNumber->number_unid            = $numberUnid;

        // Update widgets active
        $checkWidgets->status = 1;
        $checkWidgets->update();
        //update twilio webhook
        $updateNumber   = new Client($sid, $token);
        $updateNumber->incomingPhoneNumbers($purchasedNumber->sid)->update(
                array(
                    "smsUrl" => url('/') . '/api/v1/mobile-chat',
                    "smsMethod" => 'POST'
                )
            );
        if ($twilioNumber->save()) {

          return $response = json_encode(array('code'=>200,'error'=>false,'response'=>[],'status'=>true,'message'=>'Widget updated and Twilio purchased saved !'));

        } else {

          return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Widget updated but Twilio purchased failed !'));

        }
    } else {

      return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Twilio Credentials not found !'));

    }
  }
    /**
     * Get Available Phone Numbers from Twilio
     * @params widgetId = integer, user_id = integer , area_code = integer
     * @return \Illuminate\Http\JsonResponse
     */
    public function buyPhoneNumber($widgetId, $userId, $phoneNumber)
    {
        $checkWidgets = Widgets::where('id',$widgetId)->first();
        $checkUser    = Users::where('id',$userId)->first();
        if(count($checkWidgets) == 0){

            return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Widgets not found !'));

        }

        // Check user is valid or not
        if (count($checkUser) == 0) {

            return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Users not found !'));

        }

        // Get Twilio Credentials
        $getTwilioCredentials = TwilioCredentials::where('user_id',$userId)->first();

        if(count($getTwilioCredentials)!=0){

            $sid      = $getTwilioCredentials->twilio_sid;
            $token    = $getTwilioCredentials->twilio_token;

            $client   = new Client($sid, $token);

            try {
                $purchasedNumber = $client->incomingPhoneNumbers->create(array("phoneNumber" => $phoneNumber));

            } catch (\Exception $e) {

                return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>$e->getMessage().'Error Line'.$e->getLine()));

            }

            $prefix          = substr($purchasedNumber->phoneNumber, 0, -10);  //get prefix of phone_number
            $phoneNumber     = substr($purchasedNumber->phoneNumber, -10); //phone_number
            $numberUnid      = substr( str_shuffle( str_repeat( 'abcdefghijklmnopqrstuvwxyz0123456789', 10 ) ), 0, 8 ); // generate numberunid

            // Saving Twilio number
            $twilioNumber                         = new TwilioNumber;
            $twilioNumber->user_id                = $userId;
            $twilioNumber->widget_id              = $widgetId;
            $twilioNumber->prefix                 = $prefix;
            $twilioNumber->number                 = $phoneNumber;
            $twilioNumber->twilio_number_sid      = $purchasedNumber->accountSid;
            $twilioNumber->twilio_sub_account_sid = $purchasedNumber->sid;
            $twilioNumber->twilio_credentials_id  = $getTwilioCredentials->id;
            $twilioNumber->number_unid            = $numberUnid;

            // Update widgets active
            $checkWidgets->status = 1;
            $checkWidgets->update();
            //update twilio webhook
            $updateNumber   = new Client($sid, $token);
            try {
                $updateNumber->incomingPhoneNumbers($purchasedNumber->sid)->update(
                    array(
                        "smsUrl" => url('/') . '/api/v1/mobile-chat',
                        "smsMethod" => 'POST'
                    )
                );
            } catch (\Exception $e) {
                Log::info("Warning!! ".$e->getMessage());
            }

            if ($twilioNumber->save()) {

                return $response = json_encode(array('code'=>200,'error'=>false,'response'=>[],'status'=>true,'message'=>'Widget updated and Twilio purchased saved !'));

            } else {

                return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Widget updated but Twilio purchased failed !'));

            }
        } else {

            return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'Twilio Credentials not found !'));

        }
    }

    /**
     * function to fetch all twilio account and subaccount for superadmin
     * @param Request $request
     * @return false|string
     */
    public function listAllTwilioAccount(Request $request){
        $userToken = $request->token;

        if($userToken !=""){

            $getUser = UserToken::where('token',$userToken)->with('userInfo','twilioInfo')->first();

            if(count($getUser) !=0 ){

                try{
                    $client  = new Client($getUser->twilioInfo->twilio_sid, $getUser->twilioInfo->twilio_token);
                    $accounts = $client->api->v2010->accounts->read();
                    $twilioAccountList = [];
                    foreach($accounts as $key=>$value){
                        $twilioAccountList[$key]['authToken'] = $value->authToken;
                        $twilioAccountList[$key]['dateCreated'] = $value->dateCreated;
                        $twilioAccountList[$key]['friendlyName'] = $value->friendlyName;
                        $twilioAccountList[$key]['sid'] = $value->sid;
                        $twilioAccountList[$key]['twilioStatus'] = $value->status;
                        $getAdminName = TwilioCredentials::where('twilio_sid',$value->sid)->with('userInfo')->first();
                        if(count($getAdminName) != 0 && count($getAdminName->userInfo) !=0 ){
                            $twilioAccountList[$key]['adminName'] = $getAdminName->userInfo->first_name.' '.$getAdminName->userInfo->last_name;
                            $twilioAccountList[$key]['userId'] = $getAdminName->userInfo->id;
                            $twilioAccountList[$key]['userType'] = $getAdminName->userInfo->type;
                            if($getAdminName->userInfo->is_block == 1 && $getAdminName->userInfo->deleted_at == null ) {
                                $twilioAccountList[$key]['adminStatus'] = 'Active';
                            } elseif($getAdminName->userInfo->deleted_at != null ) {
                                $twilioAccountList[$key]['adminStatus'] = 'Deleted';
                            } elseif($getAdminName->userInfo->is_block == 0) {
                                $twilioAccountList[$key]['adminStatus'] = 'Deactivate';
                            }
                        }else{
                            $twilioAccountList[$key]['adminName'] = '';
                            $twilioAccountList[$key]['adminStatus'] = '';
                            $twilioAccountList[$key]['userId'] = '';
                            $twilioAccountList[$key]['userType'] = '';
                        }
                    }
                    return Response::json(array(
                        'code'    => 200,
                        'error'   => false,
                        'status'  => true,
                        'response'=> $twilioAccountList,
                        'message' => 'All twilio Credential List !'
                    ));
                }catch(\Exception $e) {
                    Log::info("Warning!! ".$e->getMessage());
                    abort(400, $e->getMessage());

                }
            }else{
                return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'User not found !'));
            }
        }else{
            return $response = json_encode(array('code'=>400,'error'=>true,'response'=>[],'status'=>false,'message'=>'User Token not found !'));
        }
    }

    /**
     * Close twilio account of an user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function closeUserTwilioAccount(Request $request)
    {
        $userId                    = $request->userId;
        $sid                       = $request->twilioSid;
        $token                     = $request->twilioToken;

        if( $sid !='' && $token!= '' ){
            try{
                $client  = new Client($sid, $token);
                $account = $client->api->accounts($sid)->update(array(
                    'status' => 'closed'
                ));

                if(count($account)!=0){
                    // check the user table for any user data associated with system
                    if($userId){
                        $getAdminTwilioCredentials = TwilioCredentials::where('user_id',$userId)->first();
                        $getAdminTwilioCredentials->twilio_friendly_name = $account->friendlyName;
                        $getAdminTwilioCredentials->twilio_sid           = $account->sid;
                        $getAdminTwilioCredentials->twilio_token         = $account->authToken;
                        $getAdminTwilioCredentials->user_id              = $userId;
                        $getAdminTwilioCredentials->type                 = 2; //Admin Account
                        $getAdminTwilioCredentials->status               = $account->status;
                        if($getAdminTwilioCredentials->update()){

                            return  Response::json(array(
                                'code'    => 200,
                                'error'   => false,
                                'status'  => true,
                                'response'=> $getAdminTwilioCredentials,
                                'message' => 'User Twilio Credentials Updated !'
                            ));

                        } else{
                            return  Response::json(array(
                                'error'   => true,
                                'status'  => false,
                                'code'    => 400,
                                'response'=> [],
                                'message' => 'Sorry Twilio Credentials not Updated !'
                            ));
                        }
                    }
                    return  Response::json(array(
                        'code'    => 200,
                        'error'   => false,
                        'status'  => true,
                        'response'=> [],
                        'message' => 'User Twilio Credentials Updated !'
                    ));
                } else {
                    return  Response::json(array(
                        'error'   => true,
                        'status'  => false,
                        'code'    => 400,
                        'response'=> [],
                        'message' => 'Sorry Twilio Credentials not Updated !'
                    ));
                }
            }catch(\Exception $e){

                return  Response::json(array(
                    'error' => true,
                    'code' => 400,
                    'status' => false,
                    'response'=> [],
                    'message' => $e->getMessage()
                ));

                \Log::info('Exception ->'.$e->getMessage());

            }
        } else {

            return  Response::json(array(
                'error'   => true,
                'code'    => 400,
                'status'  => false,
                'response'=> [],
                'message' => 'Sorry Twilio Credentials not found !'
            ));
        }
    }

}
