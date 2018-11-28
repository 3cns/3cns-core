<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Application User Routes
Route::post('userlogin','UserController@userLogin');
Route::post('userprofile','UserController@getUserProfile');
//Forget Password API
Route::post('forget-password-mail','UserController@checkForgetPasswordEmail');
Route::post('update-password','UserController@updateForgetPassword');
Route::get('update/password/{id}','UserController@getUserinfoWithForgetPasswordLink');
//update user info API
Route::post('updateuserprofile','UserController@updateUserProfile');
//Twilio Route
Route::post('twilio-information','TwilioController@storeTwilioInformation');
Route::post('get-twilio-information','TwilioController@getTwilioInformation');
//Admin Registration
Route::post('admin-registration','UserController@adminRegistration');
//Admin List
Route::get('admin-list','UserController@adminList');
//View Admin
Route::post('view-admin','UserController@viewAdmin');
//Emulate User
Route::post('emulate-user','UserController@emulateUser');
//Block User
Route::post('block-user','UserController@blockUser');
//Unblock user
Route::post('unblock-user','UserController@unblockUser');

//User logOut
Route::any('log-out','UserController@logOut');
//create Department
Route::post('create-department','DepartmentController@createDepartment');
//edit Department
Route::post('edit-department','DepartmentController@editDepartment');
//view Department
Route::post('view-department','DepartmentController@viewDepartment');
//Depaerment List
Route::post('department-list','DepartmentController@departmentList');
// Agent register
Route::post('agent-register','UserController@agentRegister');
// Agent List of an Admin or SuperAdmin
Route::post('listofAgent','UserController@listofAgent');
// Edit Agent
Route::post('agent-update','UserController@updateAgent');
// Block Unblock Agent
Route::post('agent-status-update','UserController@agentStatusUpdate');
//view Agent
Route::post('view-agent','UserController@viewAgent');
// validate Twilio Credentials
Route::get('validate-twilio-credentials','TwilioController@validateTwilioCredentials');
// Twilio Account List
Route::get('twilio-account-list','TwilioController@twilioAccountList');
// Get available phone numbers from Twilio
Route::get('getPurchasedPhoneNumber/{widgetId}/{userId}/{areaCode}', 'TwilioController@getPurchasedPhoneNumber');
// create Widgets
Route::post('createWidgets', 'WidgetController@createWidgets');
// Get list of Widgets
Route::post('listWidgets', 'WidgetController@listWidgets');
//Create Twilio SID for Admin User
Route::post('create-user-twilio-sid','UserController@createUserTwilioSid');

// Update Widgets
Route::post('updateWidgets', 'WidgetController@updateWidgets');
// Widget Department Mapping
Route::post('updateWidgetDepartment', 'WidgetController@updateWidgetDepartment');
// Widget Schedule Mapping
Route::post('updateWidgetSchedule', 'WidgetController@updateWidgetSchedule');
// View Widget
Route::post('viewWidgets', 'WidgetController@viewWidgets');
//Timezone API
Route::get('get-timezone', 'WidgetController@getTimezones');
//widget data API
Route::post('widget-data', 'WidgetController@getWidgetData');
//reset password API
Route::post('reset-password','UserController@resetPassword');
//get widget departments
Route::post('widget-departments', 'WidgetController@getWidgetDepartments');
//test function route
Route::post('widget-departments-list', 'ChatController@createSmsTemplate');
//Mobile chat Route
Route::post('mobile-chat', 'ChatController@checkMessage');
//web chat Route
Route::post('web-chat', 'ChatController@checkWebMessage');
//web chat message
Route::post('web-chat-message', 'ChatController@CheckWebChatMessage');
//chat process
Route::post('chatProcess', 'ChatController@chatProcess');
//Agent Action form frontend
Route::post('agent-chat-action', 'ChatController@agentChatAction');
//get all agents with the chatrooms
Route::get('all-agents-chatrooms', 'ChatController@agentWithChatRooms');
//test route for sms
Route::any('send-sms', 'ChatController@sendSms');
//route for the contact list
Route::post('contact-list', 'ChatListController@getContactList');
//route for the agent with all client name and client chat
Route::post('client-chat', 'ChatListController@agentWithAllChats');
//route for agent department list
Route::post('agent-department-list', 'ChatListController@agentDepartmentList');
//route for creating superadmin
Route::post('add-super-admin', 'UserController@addSuperadmin');
// route for dashboard item count
Route::post('get-dashboard-count', 'DashboardController@getDashboardCount');
// route for agent list based on selected admin
Route::post('get-admin-agents','UserController@getAdminAgents');
// route for company list
Route::post('get-company-list','UserController@getCompanyList');
// route for search number
Route::post('search-number', 'WidgetController@searchNumber');
// route for block
Route::post('block-agent', 'UserController@blockAgent');
// route for unblock
Route::post('unblock-agent','UserController@unblockAgent');
// Delete agent
Route::post('delete-agent','UserController@deleteAgent');
// Delete Widget
Route::post('delete-widget','WidgetController@deleteWidget');
// Check Department
Route::post('check-pre-delete-department','DepartmentController@checkPreDeleteDepartment');
// Delete Department
Route::post('delete-department', 'DepartmentController@deleteDepartment');
// Get all the agents with all chats
Route::post('agent-all-chats','ChatListController@getAllAgentChats');
// Upload file
Route::post('file-upload','ChatController@uploadFile');
// Initiate a chat with agent
Route::post('ini-chat','ChatController@initiateChatWithAgent');
// get only closed chats
Route::post('get-all-closed-chats','ChatController@getAllClosedChats');
// get only closed chats for the admin/superadmin
Route::post('all-agent-closed-chats','ChatListController@getAgentsClosedChats');
// get the list of all twilio account for superadmin
Route::post('list-all-twilio-accounts','TwilioController@listAllTwilioAccount');
// close a Twilio account
Route::post('close-twilio-account','TwilioController@closeUserTwilioAccount');

