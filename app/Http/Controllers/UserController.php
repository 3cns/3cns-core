<?php
/**
 * UserController to manage CRUD operation of users(super-admin, admin, agents).
 * @param Request $request
 */

namespace App\Http\Controllers;

use App\Model\Department;
use App\Model\DepartmentAgentMap;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Auth, Mail, Hash;
use Illuminate\Support\Facades\Log;
use Response;
use App\Model\UserToken; /* User Token Model */

use App\Model\Users;
use Carbon\Carbon;

class UserController extends Controller
{

    /**
     * Login of User
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userLogin(Request $request)
    {
        $email = $request->email; //email id for login
        $password = $request->password; //password for login

        // Validation of login form
        $validator = \Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {

            return Response::json(array(
                'status' => false,
                'error' => true,
                'code' => 400,
                'response' => $validator->messages(),
                'message' => null
            ));

        }

        // Merge email and userName for login
        $field = filter_var($request->input('email'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $request->merge([$field => $request->input('email')]);
        $credentials = $request->only($field, 'password');
        $credentials = array_add($credentials, 'profile_status', '1'); //If profile status !1 then user is not Active
        $credentials = array_add($credentials, 'is_block', '1'); //If profile status !1 then user is not Active

        if (Auth::attempt($credentials)) { //Attempt Auth login


            $token = $this->generateRandomString();


            //create a new token
            $saveToken = new UserToken;
            $saveToken->user_id = Auth::user()->id;
            $saveToken->token = $token;
            $saveToken->profile_user_id = Auth::user()->id;
            $saveToken->status = 1;
            $saveToken->save();

            $createToken = UserToken::where('user_id', Auth::user()->id)->with('userInfo')->first(); //sending user info with token
            $updateUserLoginTime = Users::where('id', Auth::user()->id)->update(['login_time' => Carbon::now()->toDateTimeString()]); // Update the login Time

            $response = ['userId' => Auth::user()->id, 'userToken' => $saveToken->token, 'userType' => Auth::user()->type, 'firstName' => $createToken->userInfo->first_name, 'lastName' => $createToken->userInfo->last_name, 'email' => $createToken->userInfo->email];

            return Response::json(array(
                'status' => true,
                'code' => 200,
                'error' => false,
                'response' => $response,
                'message' => "Logged in Successfully."
            ));

        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'error' => true,
                'response' => [],
                'message' => 'Invalid email or password!'
            ));

        }
    }

    /**
     * Get User Profile
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserProfile(Request $request)
    {
        if ($request->token != "") {

            $token = $request->token; //User token
            $getUserInfo = UserToken::where('token', $token)->with('userInfo')->first();

            if (count($getUserInfo) != 0) {

                return Response::json(array(
                    'status' => true,
                    'code' => 200,
                    'error' => false,
                    'response' => $getUserInfo,
                    'message' => "User Info Successfully Retrived !"
                ));

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
                'message' => 'Invalid token !'
            ));

        }
    }

    /**
     * Generate random String
     * @return String
     */
    function generateRandomString()
    {
        $length = 16;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {

            $randomString .= $characters[rand(0, $charactersLength - 1)];

        }

        return $randomString;
    }

    /**
     * Check forget password email
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkForgetPasswordEmail(Request $request)
    {
        $email = trim($request->email);

        if ($email != "") {

            $checkUserInfo = Users::where('email', $email)->first();

            if (count($checkUserInfo) != 0) {

                $emailJsonResponse = $this->sendForgotPasswordLinkMail($email);
                $emailResponse = json_decode($emailJsonResponse->content(), true);

                if ($emailResponse['code'] == 200) {

                    return Response()->json([
                        'code' => 200,
                        'status' => true,
                        'error' => false,
                        'response' => [],
                        'message' => 'Password Reset Mail Successfully Send To Your Registered Email!!'
                    ]);

                }

                if ($emailResponse['code'] == 400) {

                    return Response::json(array(
                        'code' => 400,
                        'status' => false,
                        'error' => true,
                        'response' => [],
                        'message' => 'Try Again !!!'
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
    }

    /**
     * Send forget password link using mail to user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendForgotPasswordLinkMail($email)
    {
        $email = trim($email);

        if ($email != "") {

            $forget_check = Users::where('email', $email)->first();

            if (count($forget_check) != 0) {

                $accutal_id = base64_encode($forget_check->id);
                // $body = url('/') . '/reset-password/' . $accutal_id;
                if(url('/') == 'http://178.128.187.125') {
                    $body = 'http://greys.telemojo.net/reset-password/' . $accutal_id;
                }else{
                    $body = 'http://sms.telemojo.com/reset-password/' . $accutal_id;
                }

                try {
                    Mail::send([], [], function ($message) use ($body, $forget_check) {
                        $message->from('sms@telemojo.com', 'TM SMS');
                        $message->to($forget_check->email, $forget_check->first_name)->subject('Forget Password?')->setBody($body, 'text/html');
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
                            'message' => 'Password Reset Mail Successfully Send To Your Registered Email!!'
                        ]);

                    }
                } catch (\Exception $e) {
                    Log::info('con not able to send sms');
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
     * Request forget password
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserinfoWithForgetPasswordLink($id = null)
    {
        if ($id != "") {

            $userId = base64_decode($id);
            $findUser = Users::where('id', $userId)->first();

            if (count($findUser) != 0) {

                return Response::json(array(
                    'status' => true,
                    'code' => 200,
                    'response' => $findUser,
                    'error' => false,
                    'message' => "User Info Successfully Retrived !"
                ));

            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'error' => true,
                    'message' => 'No User Found !'
                ));

            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'error' => true,
                'message' => 'Invalid ID !'
            ));

        }
    }

    /**
     * Update Forget Password
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateForgetPassword(Request $request)
    {
        $pass = $request->password; // Password
        $conf_pass = $request->conf_pass; // Confirm Password
        $id = base64_decode($request->id); //User ID send from the form

        if ($pass == $conf_pass) {

            $user = Users::where('id', $id)->first();
            $user->password = Hash::make($pass);
            // $user->update();

            if ($user->update()) {

                return Response()->json([
                    'code' => 200,
                    'success' => true,
                    'error' => false,
                    'status' => true,
                    'response' => [],
                    'message' => 'Your Password Updated Successfully!'
                ]);

            } else {

                return Response()->json([
                    'code' => 400,
                    'success' => false,
                    'error' => true,
                    'status' => false,
                    'response' => [],
                    'message' => 'Try Again!'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'success' => false,
                'status' => false,
                'response' => [],
                'message' => 'Password And Confirm Password Is Not Same!'
            ]);

        }
    }

    /**
     * User Profile Update API Function
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateUserProfile(Request $request)
    {
        $userId = $request->userId;
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $email = trim($request->email);
        $phone = $request->phone;
        $company = $request->company;

        if ($userId != "") {

            $checkUser = Users::where('id', $userId)->first();

            if (count($checkUser) != 0) {

                $checkUser->first_name = $firstName;
                $checkUser->last_name = $lastName;

                // Check email is unique or not
                if ($email != "") {

                    $checkUserWithEmail = Users::where('id', '!=', $userId)->where('email', $email)->first();

                    if (count($checkUserWithEmail) == 0) {

                        $checkUser->email = $email;

                    } else {

                        return Response()->json([
                            'code' => 400,
                            'error' => true,
                            'status' => false,
                            'response' => [],
                            'message' => 'Email ID already exists !'
                        ]);

                    }
                }
                $checkUser->phone = $phone;
                $checkUser->company = $company;

                if ($checkUser->save()) {

                    return Response()->json([
                        'code' => 200,
                        'error' => false,
                        'status' => true,
                        'response' => $checkUser,
                        'message' => 'User Updated !'
                    ]);

                }
            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'status' => false,
                'response' => [],
                'message' => 'Not a valid User ID !'
            ]);

        }
    }

    /**
     * Admin Registration
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function adminRegistration(Request $request)
    {
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $email = trim($request->email);
        $phone = $request->phone;
        $company = $request->company;

        if ($request->password != "") {

            $password = $request->password; //take user inputed password

        } else {

            $password = $this->generateRandomString(); //generate Random Password for the admin

        }

        //Assign the parentId adn User type of the Created User
        if (Auth::check()) {

            if (Auth::user()->type == 1) {

                $parentId = Auth::user()->id;
                $type = 2;

            }

            if (Auth::user()->type == 2) {

                $parentId = Auth::user()->id;
                $type = 3;

            }

        } else {

            $parentId = 0;
            $type = 2;

        }
        if ($email != "") {

            $checkEmailExist = Users::where('email', $email)->first(); //Check email exist

            if (count($checkEmailExist) == 0) {

                $saveUser = new Users;
                $saveUser->first_name = $firstName;
                $saveUser->last_name = $lastName;
                $saveUser->email = $email;
                $saveUser->phone = $phone;
                $saveUser->password = Hash::make($password);
                $saveUser->type = $type; //Depands on the User Creation type by default 2
                $saveUser->company = $company;
                $saveUser->parent_id = $parentId;
                $saveUser->profile_status = 1; //Profile set to Active

                if ($saveUser->save()) {

                    if ($saveUser->type == 2) {

                        $UserData = new Request;
                        $UserData->userId = $saveUser->id; //admin ID
                        $UserData->email = $saveUser->email; //admin Email ID Used as the Firendly Name in Twilio Account
                        //send to TwilioController for creating twilio subacount
                        $saveAdminTwilioCredential = app(\App\Http\Controllers\TwilioController::class)
                            ->createTwilioSubacount($UserData);   // Create Twilio sub-account
                        $saveAdminTwilioCredentialResponse = json_decode($saveAdminTwilioCredential->content(), true);

                        if ($saveAdminTwilioCredentialResponse['code'] == 200) {

                            \Log::info($saveAdminTwilioCredentialResponse['message']);

                        }

                        if ($saveAdminTwilioCredentialResponse['code'] == 400) {

                            \Log::info($saveAdminTwilioCredentialResponse['message']);

                        }
                    }
                    $this->sendRegistrationEmail($email, $password); //send email and password to the register admin user
                    return Response()->json([
                        'code' => 200,
                        'success' => true,
                        'error' => false,
                        'status' => true,
                        'response' => $saveUser,
                        'message' => 'Admin User Saved !'
                    ]);

                } else {

                    return Response()->json([
                        'code' => 400,
                        'success' => false,
                        'error' => true,
                        'status' => false,
                        'response' => [],
                        'message' => 'Admin User not saved,please try again in a while !'
                    ]);

                }
            } else {

                return Response()->json([
                    'code' => 400,
                    'error' => true,
                    'success' => false,
                    'status' => false,
                    'response' => [],
                    'message' => 'Email ID exist,please choose new email id !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'success' => false,
                'status' => false,
                'response' => [],
                'message' => 'Please provide valid data !'
            ]);

        }
    }

    /**
     * Get List of Admin Users
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function adminList()
    {
        $adminList = Users::where('type', 2)->select('id', 'parent_id', 'first_name', 'last_name', 'email', 'username', 'type', 'phone', 'company', 'profile_status', 'created_at', 'updated_at')->with('twilioInfo')->orderBy('created_at', 'desc')->get();

        if (count($adminList) != 0) {

            return Response()->json([
                'code' => 200,
                'success' => true,
                'error' => false,
                'status' => true,
                'response' => $adminList,
                'message' => 'List of Admins !'
            ]);

        } else {

            return Response()->json([
                'code' => 400,
                'success' => false,
                'error' => true,
                'response' => [],
                'status' => false,
                'message' => 'No Admin Found !'
            ]);

        }
    }

    /**
     * Get Admin Details
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function viewAdmin(Request $request)
    {

        $adminId = $request->adminId;

        if ($adminId != '') { //Get admin details
            $admin = Users::where('id', $adminId)->first();

            if (count($admin) != 0) {

                return Response::json(array(
                    'status' => true,
                    'code' => 200,
                    'response' => $admin,
                    'message' => 'Admin Found !'
                ));

            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'message' => 'Sorry admin not found !'
                ));

            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'message' => 'Please select an admin !'
            ));

        }
    }

    /**
     * Emulate admin an user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function emulateUser(Request $request)
    {
        $userId = $request->userId;
        $loggedinUserToken = $request->userToken;
        $logUser = Users::find($userId);

        if (count($logUser) != 0) {

            $findUser = UserToken::where('token', $loggedinUserToken)->first();

            if (count($findUser) != 0) {

                $findUser->profile_user_id = $userId;
                $findUser->save();
                $loginUserToken = $findUser->token;

                return Response()->json([
                    'code' => 200,
                    'success' => true,
                    'error' => false,
                    'status' => true,
                    'response' => ['token' => $loginUserToken, 'userType' => $logUser->type],
                    'message' => 'token for emulated user !'
                ]);

            } else {

                return Response()->json([
                    'code' => 400,
                    'success' => false,
                    'error' => true,
                    'status' => false,
                    'response' => [],
                    'message' => 'Sorry user not found !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'success' => false,
                'status' => false,
                'response' => [],
                'message' => 'Sorry user not found !'
            ]);

        }
    }

    /**
     * Block an User
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function blockUser(Request $request)
    {
        $userId = $request->userId;
        $checkUser = Users::where('id', $userId)->first(); //Check user is exist

        if (count($checkUser) != 0) {

            $checkUser->profile_status = 2; //status 2 for Block user

            if ($checkUser->update()) {  // Update User

                $UserData = new Request;
                $UserData->userId = $userId; //User / admin ID
                $updateAdminTwilioCredential = app(\App\Http\Controllers\TwilioController::class)
                    ->suspandUserTwilioAccount($UserData);  // Twilio sub-account deactivate
                $updateAdminTwilioCredentialResponse = json_decode($updateAdminTwilioCredential->content(), true);

                if ($updateAdminTwilioCredentialResponse['code'] == 200) {

                    \Log::info($updateAdminTwilioCredentialResponse['message']);  // Twilio response Log

                }

                if ($updateAdminTwilioCredentialResponse['code'] == 400) {

                    \Log::info($updateAdminTwilioCredentialResponse['message']);  // Twilio response Log

                }
                $getUser = Users::where('id', $userId)->with('twilioInfo')->first();

                return Response()->json([
                    'code' => 200,
                    'success' => true,
                    'error' => false,
                    'status' => true,
                    'response' => $getUser,
                    'message' => 'User Blocked !'
                ]);

            } else {

                return Response()->json([
                    'code' => 400,
                    'success' => false,
                    'error' => true,
                    'status' => false,
                    'response' => [],
                    'message' => 'User Not Blocked try again later !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'success' => false,
                'error' => true,
                'status' => false,
                'response' => [],
                'message' => 'User not found !'
            ]);

        }
    }

    /**
     * Unblock of an user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function unblockUser(Request $request)
    {
        $userId = $request->userId;
        $checkUser = Users::where('id', $userId)->first(); //Check user is exist

        if (count($checkUser) != 0) {

            $checkUser->profile_status = 1; //status 1 for Reactive Block user

            if ($checkUser->update()) { //Update User

                $UserData = new Request;
                $UserData->userId = $userId; //User / admin ID
                $updateAdminTwilioCredential = app(\App\Http\Controllers\TwilioController::class)
                    ->reactiveUserTwilioAccount($UserData); // Reactivate twilio sub account
                $updateAdminTwilioCredentialResponse = json_decode($updateAdminTwilioCredential->content(), true);

                if ($updateAdminTwilioCredentialResponse['code'] == 200) {

                    \Log::info($updateAdminTwilioCredentialResponse['message']); // Log Twilio response

                }

                if ($updateAdminTwilioCredentialResponse['code'] == 400) {

                    \Log::info($updateAdminTwilioCredentialResponse['message']); // Log Twilio response

                }
                $getUser = Users::where('id', $userId)->with('twilioInfo')->first();
                return Response()->json([
                    'code' => 200,
                    'success' => true,
                    'status' => true,
                    'response' => $getUser,
                    'message' => 'User Unblocked !'
                ]);

            } else {

                return Response()->json([
                    'code' => 400,
                    'success' => false,
                    'status' => false,
                    'response' => [],
                    'message' => 'User Not Unblock try again later !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'status' => false,
                'response' => [],
                'message' => 'User not found !'
            ]);

        }
    }

    /**
     * Logout of users
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logOut(Request $request)
    {
        $token = $request->token; //Get the token

        if ($token != "") {


            $checkToken = UserToken::where('token', $token)->first(); // checking the token valid or not

            if (count($checkToken) != 0) {
                \Log::info($checkToken->user_id);
                $removeUserLoginTime = Users::where('id', $checkToken->user_id)->update(['login_time' => null]);
                if ($checkToken->delete()) {  //Delete the token

                    return Response()->json([
                        'code' => 200,
                        'success' => true,
                        'status' => true,
                        'response' => [],
                        'message' => 'User Logged Out !'
                    ]);

                } else {

                    return Response()->json([
                        'code' => 400,
                        'success' => false,
                        'status' => false,
                        'response' => [],
                        'message' => 'User Not Logged Out !'
                    ]);

                }
            } else {

                return Response()->json([
                    'code' => 400,
                    'success' => false,
                    'status' => false,
                    'response' => [],
                    'message' => 'User Not Found !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'success' => false,
                'status' => false,
                'response' => [],
                'message' => 'Token Not Found !'
            ]);

        }
    }

    /**
     * Create Agent
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function agentRegister(Request $request)
    {
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $email = trim($request->email);
        $phone = $request->phone;
        $password = $this->generateRandomString(); //generate Random Password for the agent
        $parentId = $request->parentId; //admin ID
        $departmentId = $request->departmentId; //department id
        // $departmentId = implode(',',array_unique(explode(',',$request->departmentId)));
        $type = 3;  //Agent User
        $isEmailNotification = $request->isEmailNotification ? '1' : '0';
        $isPhoneNotification = $request->isPhoneNotification ? '1' : '0';
        if ($email != "") {

            $checkEmailExist = Users::where('email', $email)->first(); // Check email is unique

            if (count($checkEmailExist) == 0) {

                $saveUser = new Users;
                $saveUser->first_name = $firstName;
                $saveUser->last_name = $lastName;
                $saveUser->email = $email;
                $saveUser->phone = $phone;
                $saveUser->password = Hash::make($password);
                $saveUser->type = $type; // Depands on the User Creation type by default 2
                $saveUser->parent_id = $parentId;
                $saveUser->profile_status = 1; // Profile set to Active
                $saveUser->is_email_notification = $isEmailNotification;
                $saveUser->is_phone_notification = $isPhoneNotification;
                if ($saveUser->save()) {
                    if(is_array($departmentId) || is_object($departmentId)) {

                        foreach ($departmentId as $key => $value) {
                            $saveDepartment = new DepartmentAgentMap;
                            $saveDepartment->department_id = $value['id'];
                            $saveDepartment->user_id = $saveUser->id;
                            $saveDepartment->save();
                        }
                    }
                    $this->sendRegistrationEmail($email, $password); //send email and password to the register Agent
                    return Response()->json([
                        'code' => 200,
                        'success' => true,
                        'error' => false,
                        'status' => true,
                        'response' => $saveUser,
                        'message' => 'Agent User Saved !'
                    ]);

                } else {

                    return Response()->json([
                        'code' => 400,
                        'error' => true,
                        'success' => false,
                        'status' => false,
                        'response' => [],
                        'message' => 'Agent User not saved,please try again in a while !'
                    ]);

                }
            } else {

                return Response()->json([
                    'code' => 400,
                    'error' => true,
                    'success' => false,
                    'status' => false,
                    'response' => [],
                    'message' => 'Email ID exist,please choose new email id !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'success' => false,
                'status' => false,
                'response' => [],
                'message' => 'Please provide valid data !'
            ]);

        }
    }

    /**
     * Get List of Agents
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function listofAgent(Request $request)
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

                $response = array('code' => 200, 'error' => false, 'response' => $getAgents, 'status' => true, 'message' => 'List of Agents !');

            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Agent Found !');

            }

        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Invalid Token !');

        }

        return Response()->json($response);
    }

    /**
     * Update Agent Profile
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateAgent(Request $request)
    {
        $userId = $request->userId;
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $email = trim($request->email);
        $phone = $request->phone;
        $departmentId = $request->departmentId;
        $isEmailNotification = $request->isEmailNotification ? '1' : '0';
        $isPhoneNotification = $request->isPhoneNotification ? '1' : '0';
        if ($userId != '') {

            $checkUser = Users::where('id', $userId)->first(); // Check user is in record
            if (count($checkUser) != 0) {
                $checkUser->first_name = $firstName;
                $checkUser->last_name = $lastName;
                $checkUser->phone = $phone;
                $checkUser->is_email_notification = $isEmailNotification;
                $checkUser->is_phone_notification = $isPhoneNotification;
                if ($checkUser->save()) { // Save user data
                    $deleteOldAgentDeptMap =  DepartmentAgentMap::where('user_id', $userId)->delete();

                    if(is_array($departmentId) || is_object($departmentId)) {
                        foreach ($departmentId as $key => $value) {
                            $saveDepartment = new DepartmentAgentMap;
                            $saveDepartment->department_id = $value['id'];
                            $saveDepartment->user_id = $userId;
                            $saveDepartment->save();
                        }
                    }
                    $response = array('code' => 200, 'error' => false, 'response' => $checkUser, 'status' => true, 'message' => 'Agent Updated!');
                } else {

                    $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Agent not updated !');
                }
            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Agent ID not Found !');
            }
        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Agent ID not Found !');

        }

        return Response()->json($response);
    }

    /**
     * Agent Status Update (Active/Inactive)
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function agentStatusUpdate(Request $request)
    {
        $userId = $request->id;

        if ($userId != '') {

            $checkUser = Users::where('id', $userId)->first(); //Check User is in record

            if (count($checkUser) != 0) {

                if ($checkUser->profile_status == 2) { //Check status is Inactive

                    $checkUser->profile_status = 1;
                    $response = array('code' => 200, 'response' => [], 'error' => false, 'status' => false, 'message' => 'Agent Activated !');

                } else {

                    $checkUser->profile_status = 2;
                    $response = array('code' => 200, 'response' => [], 'error' => false, 'status' => false, 'message' => 'Agent DeActivated !');

                }

                if (!$checkUser->save()) { // User status Update

                    $response = array('code' => 400, 'response' => [], 'error' => true, 'status' => false, 'message' => 'Agent Update Failed !');

                }

            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Agent Found !');

            }

        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Agent Found !');

        }

        return Response()->json($response);
    }

    /**
     * To get the agent details
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function viewAgent(Request $request)
    {
        $agentId = $request->agentId;

        if ($agentId != '') { //Get agent details

            $agent = Users::where('id', $agentId)->with('departmentAgentMapping.departmentDetails','getParentInfo')->get()->first();

            if (count($agent) != 0) {

                $agentArray = [];

                /** to send the agent details */
                $agentArray['company'] = $agent->company;
                $agentArray['email'] = $agent->email;
                $agentArray['id'] = $agent->id;
                $agentArray['first_name'] = $agent->first_name;
                $agentArray['last_name'] = $agent->last_name;
                $agentArray['parent_id'] = $agent->parent_id;
                $agentArray['password'] = $agent->password;
                $agentArray['phone'] = $agent->phone;
                $agentArray['profile_status'] = $agent->profile_status;
                $agentArray['type'] = $agent->type;
                $agentArray['admin_first_name'] = $agent->getParentInfo->first_name;
                $agentArray['admin_last_name'] = $agent->getParentInfo->last_name;
                $agentDeptArray = [];
                if(isset($agent->departmentAgentMapping)){
                    foreach($agent->departmentAgentMapping as $maxKey=>$deptValue){
                            if (isset($deptValue->departmentDetails) && $deptValue->departmentDetails && $deptValue->department_id != null) {
                                $agentDeptArray[$maxKey]['id'] = $deptValue->departmentDetails->id;
                                $agentDeptArray[$maxKey]['department_name'] = $deptValue->departmentDetails->department_name;
                                $agentDeptArray[$maxKey]['department_details'] = $deptValue->departmentDetails->department_details;

                            } else {
                                $agentDeptArray = [];
                            }
                    }
                } else {
                    $agentDeptArray = [];
                }
                $agentArray['departments'] = $agentDeptArray;
                $agentArray['admin_username'] = "";
                $agentArray['is_email_notification'] = $agent->is_email_notification == '1' ? true : false;
                $agentArray['is_phone_notification'] = $agent->is_phone_notification == '1' ? true : false;


                return Response::json(array(
                    'status' => true,
                    'code' => 200,
                    'response' => $agentArray,
                    'message' => 'Agent Found !'
                ));

            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'message' => 'Sorry agent not found !'
                ));

            }
        } else {

            return Response::json(array(
                'status' => false,
                'code' => 400,
                'response' => [],
                'message' => 'Please select an agent !'
            ));

        }
    }

    /**
     * Send Email to users when they are registering to the system
     *
     * @param $email ,$password
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendRegistrationEmail($email, $password)
    {
        $email = trim($email);
        $password = trim($password);
        if ($email != "") {

            $checkUser = Users::where('email', $email)->first();

            if (count($checkUser) != 0) {

//            $body       = 'Thanks for signup up with 3c.<br><br>
//	                         Your login ID is your email you used during your sign up process.<br><br>
//	                         Your password is : ';
//            $body .= $password;
//            $body .= '<br><br>';
//            $body .= '<br><br><br>Please Change your password !';
                // Send Mail to user email id with the created password
                if($checkUser->type == 3){
                    $getAdminInfo = Users::where('id',$checkUser->parent_id)->first();
                }else{
                    $getAdminInfo=[];
                }
                try {
                    Mail::send('emails.agent-register', ['password' => $password, 'userInfo' => $checkUser, 'getAdminInfo' => $getAdminInfo, 'siteUrl' => url('/')], function ($message) use ($checkUser) {
                        $message->from('sms@telemojo.com', 'TM SMS');
                        $message->to($checkUser->email, $checkUser->first_name)->subject('New TM SMS account');
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
                    Log::info('can not able to send sms');
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
     * create Twilio SID for admin user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createUserTwilioSid(Request $request)
    {
        $userId = $request->userId;

        if ($userId != "") {

            $checkUser = Users::where('id', $userId)->first();
            if (count($checkUser) != 0) {

                $UserData = new Request;
                $UserData->userId = $checkUser->id; //admin ID
                $UserData->email = $checkUser->email; //admin Email ID Used as the Firendly Name in Twilio Account
                //send to TwilioController for creating twilio subacount
                $saveAdminTwilioCredential = app(\App\Http\Controllers\TwilioController::class)
                    ->createTwilioSubacount($UserData);   // Create Twilio sub-account
                $saveAdminTwilioCredentialResponse = json_decode($saveAdminTwilioCredential->content(), true);

                if ($saveAdminTwilioCredentialResponse['code'] == 200) {
                    $checkUser = Users::where('id', $userId)->with('twilioInfo')->first();
                    \Log::info($saveAdminTwilioCredentialResponse['message']);
                    return Response()->json([
                        'code'    => 200,
                        'error'   => false,
                        'status'  => true,
                        'response'=> [],
                        'message' => 'Password Updated !'
                    ]);
                }

                if ($saveAdminTwilioCredentialResponse['code'] == 400) {

                    \Log::info($saveAdminTwilioCredentialResponse['message']);
                    return Response()->json([
                        'code' => 400,
                        'error' => true,
                        'status' => false,
                        'response' => [],
                        'message' => $saveAdminTwilioCredentialResponse['message']
                    ]);

                }
            } else {
                return Response()->json([
                    'code' => 400,
                    'error' => true,
                    'status' => false,
                    'response' => [],
                    'message' => 'user not found !'
                ]);
            }
        } else {
            return Response()->json([
                'code' => 400,
                'error' => true,
                'status' => false,
                'response' => [],
                'message' => 'Not a valid User Id !'
            ]);
        }
    }

    /**
     * Reset Password for all users
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function resetPassword(Request $request)
    {
        $userToken = $request->token;  //token recive from the user
        $password = $request->password;   //password recive from the user
        $confPassword = $request->confPassword;   //confirm password recive from the user

        if ($userToken != "") {
            if ($password == $confPassword) {
                $findUser = UserToken::where('token', $userToken)->first();
                if (count($findUser) != 0) {
                    $newPassword = Hash::make($password);
                    $updatePassword = Users::where('id', $findUser->profile_user_id)
                        ->update(array('password' => $newPassword));
                    if ($updatePassword) {
                        return Response()->json([
                            'code' => 200,
                            'error' => false,
                            'status' => true,
                            'response' => [],
                            'message' => 'Password Updated,Login With new Password !'
                        ]);
                    } else {
                        return Response()->json([
                            'code' => 400,
                            'error' => true,
                            'status' => false,
                            'response' => [],
                            'message' => 'Something went wrong,Please try again !'
                        ]);
                    }
                } else {
                    return Response()->json([
                        'code' => 400,
                        'error' => true,
                        'status' => false,
                        'response' => [],
                        'message' => 'Sorry user not found !'
                    ]);
                }
            } else {
                return Response()->json([
                    'code' => 400,
                    'error' => true,
                    'status' => false,
                    'response' => [],
                    'message' => 'Password and Confirm Password not same !'
                ]);
            }


        } else {
            return Response()->json([
                'code' => 400,
                'error' => true,
                'status' => false,
                'response' => [],
                'message' => 'Not a valid User Token !'
            ]);
        }
    }

    public function addSuperadmin(Request $request)
    {
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $email = $request->email;

        if ($request->password != "") {

            $password = $request->password; //take user inputed password

        } else {

            $password = $this->generateRandomString(); //generate Random Password for the admin

        }

        if ($email != "") {

            $checkEmailExist = Users::where('email', $email)->first(); //Check email exist

            if (count($checkEmailExist) == 0) {

                $saveUser = new Users;
                $saveUser->first_name = $firstName;
                $saveUser->last_name = $lastName;
                $saveUser->email = $email;
                $saveUser->password = Hash::make($password);
                $saveUser->type = 1; //Depands on the User Creation type by default 2
                $saveUser->profile_status = 1; //Profile set to Active

                if ($saveUser->save()) {

                    $this->sendRegistrationEmail($email, $password); //send email and password to the register admin user
                    return Response()->json([
                        'code' => 200,
                        'success' => true,
                        'error' => false,
                        'status' => true,
                        'response' => $saveUser,
                        'message' => 'Superadmin created !'
                    ]);

                } else {

                    return Response()->json([
                        'code' => 400,
                        'success' => false,
                        'error' => true,
                        'status' => false,
                        'response' => [],
                        'message' => 'Superadmin not created,please try again in a while !'
                    ]);

                }
            } else {

                return Response()->json([
                    'code' => 400,
                    'error' => true,
                    'success' => false,
                    'status' => false,
                    'response' => [],
                    'message' => 'Email ID exist,please choose new email id !'
                ]);

            }
        } else {

            return Response()->json([
                'code' => 400,
                'error' => true,
                'success' => false,
                'status' => false,
                'response' => [],
                'message' => 'Please provide valid data !'
            ]);

        }
    }

    /**
     *  This function returns a List of Agent on basis of admin id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAdminAgents(Request $request)
    {

        if ($request->userId) {

            $checkForUser = Users::where('id', $request->userId)->count();
            if ($checkForUser) {

                $getAgents = Users::where('parent_id', $request->userId)->orderBy('first_name', 'asc')->get();

                if ($getAgents) {

                    $response = array('code' => 200, 'error' => false, 'response' => $getAgents, 'status' => true, 'message' => 'List of Agents !');
                } else {

                    $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Agent Found for this admin !');
                }
            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Admin Found !');
            }
        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'No Admin id Found in the request !');
        }

        return Response()->json($response);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCompanyList(Request $request)
    {
        $userToken = $request->token;  //token recive from the user
        if ($userToken != "") {

            $getUserInfo = UserToken::where('token', $userToken)->with('userInfo')->first();
            if (count($getUserInfo) != "" && $getUserInfo->userInfo->type == 1) {

                $getCompany = Users::select('id', 'company')->where('type', 2)->where('company', '!=', '')->get();
                if (count($getCompany) != 0) {

                    $response = array('code' => 200, 'error' => false, 'response' => $getCompany, 'status' => true, 'message' => 'List of Company !');
                } else {

                    $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Data not found !');
                }
            } else {

                $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'Not a superadmin !');
            }
        } else {

            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => 'User token not found  !');
        }

        return Response()->json($response);
    }

    /**
     * function to check user log in status
     * @return int
     */
    public function userLoginStatus($userId)
    {
        if ($userId != "" && $userId != null) {
            $getUserLoginTime = Users::where('id', $userId)->select('login_time')->first();
            if ($getUserLoginTime != null) {
                if ($getUserLoginTime->login_time > Carbon::now()->subMinutes(5)) {
                    // echo 'user logged in';
                    return 1;
                } else {
                    // echo 'user not logged in';
                    return 0;
                }
            } else {
                // echo 'user not logged in ';
                return 0;
            }
        } else {
            return 0;
            // echo 'user id not found';
        }
    }

    /**
     * function to update the user loging time after an activity in the software
     * @param $userId
     */
    public function updateUserLoggedInTime($userId)
    {
        if ($userId != null && $userId) {
            $updateUserLoginTime = Users::where('id', $userId)->update(['login_time' => Carbon::now()->toDateTimeString()]); // Update the login Time
        } else {
            echo 'user Not Found';
        }

    }

    /**
     * Block agent form login
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     */
    public function blockAgent(Request $request)
    {
        try {
            $getAgent = Users::findOrFail($request->userId);
            $getAgent->is_block = '0';
            $getAgent->update();
            $response = array('code' => 200, 'error' => false, 'response' => $getAgent, 'status' => true, 'message' => 'User Blocked !');
        } catch (\Exception $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        } catch (ModelNotFoundException $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        }
        return Response()->json($response);
    }

    /**
     * Unblock agent
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function unblockAgent(Request $request)
    {
        try {
            $getAgent = Users::findOrFail($request->userId);
            $getAgent->is_block = '1';
            $getAgent->update();
            $response = array('code' => 200, 'error' => false, 'response' => $getAgent, 'status' => true, 'message' => 'User Unblocked!');
        } catch (\Exception $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        } catch (ModelNotFoundException $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        }
        return Response()->json($response);
    }
    /**
     * Delete agent
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteAgent(Request $request)
    {
        try {
            $getAgent = Users::findOrFail($request->userId);
            $getAgent->delete();
            $response = array('code' => 200, 'error' => false, 'response' => $request->userId, 'status' => true, 'message' => 'User Deleted!');
        } catch (\Exception $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        } catch (ModelNotFoundException $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        }
        return Response()->json($response);
    }
}
