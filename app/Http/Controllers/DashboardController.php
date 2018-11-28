<?php

namespace App\Http\Controllers;

use App\Model\DepartmentAgentMap;
use App\Model\MessageAgentTrack;
use App\Model\TwilioNumber;
use Illuminate\Http\Request;
use Response;
use App\Model\Widgets;
use App\Model\Users;
use App\Model\UserToken;
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
use App\Http\Controllers\TwilioController;
use Helper;
use Twilio\Rest\Client;                         /* Twilio REST client */

use App\Exceptions\EntityConflictException;
use App\Exceptions\HttpBadRequestException;
use Illuminate\Database\QueryException;

class DashboardController extends Controller
{
    /**
     * Function to get count of the user activity
     * @param Request $request
     */
    public function getDashboardCount(Request $request)
    {
        $userToken = $request->token; //user Token
        $userId = $request->userId; //user ID

        if ($userToken != "") {
            $checkUser = UserToken::where('token', $userToken)->with('userInfo')->first();

            if (count($checkUser) != 0) {

                if ($checkUser->userInfo->type == 1 && $userId == "") { //Superadmin with no user id

                    $dashboardItemCount = \DB::select("SELECT (SELECT COUNT(*)FROM department WHERE deleted_at IS NULL ) AS departmentCount, (SELECT COUNT(*)FROM widgets WHERE deleted_at IS NULL ) AS widgetCount,(SELECT COUNT(*)FROM users where type=3 AND deleted_at IS NULL ) AS agentCount, (SELECT COUNT(*)FROM users where type=2) as adminCount");
                    // this will come as superadmin

                    if (count($dashboardItemCount) != 0) {

                        return Response::json(array(
                            'status' => true,
                            'code' => 200,
                            'response' => $dashboardItemCount,
                            'message' => 'Dashboard Item Count List!'
                        ));

                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'response' => [],
                            'message' => 'Sorry Dashboard Item Count list not found !'
                        ));

                    }
                }

                if ($checkUser->userInfo->type == 1 && $userId != "") { // Emulate Superadmin with an id

                    $dashboardItems = Users::where('id', $userId)->with('agentCount', 'departmentCount', 'widgetCount')->get();

                    $dashboardItemCount = array();
                    foreach ($dashboardItems as $key => $value) {
                        $dashboardItemCount[$key]['agentCount'] = $value->agentCount->count();
                        $dashboardItemCount[$key]['departmentCount'] = $value->departmentCount->count();
                        $dashboardItemCount[$key]['widgetCount'] = $value->widgetCount->count();
                    }

                    if (count($dashboardItemCount) != 0) {

                        return Response::json(array(
                            'status' => true,
                            'code' => 200,
                            'response' => $dashboardItemCount,
                            'message' => 'Dashboard Item Count List!'
                        ));

                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'response' => [],
                            'message' => 'Sorry Dashboard Item Count list not found !'
                        ));

                    }
                }

                if ($checkUser->userInfo->type == 2) { //   Admin Dashboard items count

                    $dashboardItems = Users::where('id', $userId)->with('agentCount', 'departmentCount', 'widgetCount')->get();

                    $dashboardItemCount = array();
                    foreach ($dashboardItems as $key => $value) {
                        $dashboardItemCount[$key]['agentCount'] = $value->agentCount->count();
                        $dashboardItemCount[$key]['departmentCount'] = $value->departmentCount->count();
                        $dashboardItemCount[$key]['widgetCount'] = $value->widgetCount->count();
                    }

                    if (count($dashboardItemCount) != 0) {

                        return Response::json(array(
                            'status' => true,
                            'code' => 200,
                            'response' => $dashboardItemCount,
                            'message' => 'Dashboard Item Count List !'
                        ));

                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'response' => [],
                            'message' => 'Sorry Dashboard Item Count list not found !'
                        ));
                    }
                } if ($checkUser->userInfo->type == 3) { // Agent Dashboard item count
                    $dashboardItems = Users::where('id',$userId)->with('pendingChatCount','ongoingChatCount','closedChatCount','rejectedChatCount')->get();

                    $dashboardItemCount = array();

                    foreach ($dashboardItems as $key => $value) {
                        $dashboardItemCount[$key]['pendingChatCount']   = $value->pendingChatCount->count();
                        $dashboardItemCount[$key]['ongoingChatCount']   = $value->ongoingChatCount->count();
                        $dashboardItemCount[$key]['closedChatCount']    = $value->agentClosedChatCount->count() + $value->closedChatCount->count();
                        $dashboardItemCount[$key]['rejectedChatCount']  = $value->rejectedChatCount->count();
                    }

                    if (count($dashboardItemCount) != 0) {
                        /** Update user activity */
                        $userController = new UserController;
                        $userController->updateUserLoggedInTime($userId);
                        $widgets = [];
                        $agentDepartments = DepartmentAgentMap::where('user_id',$userId)->pluck('department_id');


                        if (count($agentDepartments) > 0) {
                            $departments = array_unique($agentDepartments->toArray(), SORT_REGULAR);
                            $departmentWidgets = WidgetDepartmentMapping::whereIn('department_id',$departments)->orderBy('department_orders')->pluck('widget_id');
                            if (count($departmentWidgets) > 0) {
                                $widgets = Widgets::whereIn('id',$departmentWidgets)->whereNull('deleted_at')->with('twilioNumbers')->get();
                            }
                        }
                        return Response::json(array(
                            'status' => true,
                            'code' => 200,
                            'response' => $dashboardItemCount,
                            'widgets' => $widgets,
                            'message' => 'Dashboard Item Count List !'
                        ));

                    } else {

                        return Response::json(array(
                            'status' => false,
                            'code' => 400,
                            'response' => [],
                            'message' => 'Sorry Dashboard Item Count list not found !'
                        ));
                    }

                }
            } else {

                return Response::json(array(
                    'status' => false,
                    'code' => 400,
                    'response' => [],
                    'message' => 'Invalid Token !'
                ));

            }
        }
    }

}
