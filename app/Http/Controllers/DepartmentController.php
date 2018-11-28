<?php
/**
 * DepartmentController to manage CRUD operation of Department of admin & agents.
 * @param Request $request
 */
namespace App\Http\Controllers;

use App\Model\DepartmentAgentMap;
use App\Model\WidgetDepartmentMapping;
use App\Model\Widgets;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Auth,Mail,Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\Expr\AssignOp\Concat;
use Response;
use App\Model\UserToken; /* User Token Model */
use App\Model\Users;
use App\Model\Department;

class DepartmentController extends Controller
{
    /**
     * Create department of admin
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createDepartment(Request $request)
    {
        $userToken         = $request->token;
        $userId            = $request->userId;
        $departmentName    = $request->departmentName;
        $departmentDetails = $request->departmentDetails;
        $agentIds          = $request->agentIds;
        if( $userId != "" ) {

            $saveDepartment                     = new Department;
            $saveDepartment->department_name    = $departmentName;
            $saveDepartment->department_details = $departmentDetails;
            $saveDepartment->user_id            = $userId;
            $saveDepartment->status             = 1;

            if( $saveDepartment->save() ) {
                if (count($agentIds) > 0) {
                    foreach ($agentIds as $agentId) {
                        $checkUpdateDepartmentAgent = DepartmentAgentMap::where('user_id',$agentId['id'])->first();
                        if($checkUpdateDepartmentAgent){
                            $checkUpdateDepartmentAgent->department_id = $saveDepartment->id;
                            $checkUpdateDepartmentAgent->user_id = $agentId['id'];
                            $checkUpdateDepartmentAgent->save();
                        }else{
                            $departmentAgents = new DepartmentAgentMap();
                            $departmentAgents->department_id = $saveDepartment->id;
                            $departmentAgents->user_id = $agentId['id'];
                            $departmentAgents->save();
                        }
                    }
                }
                return Response::json(array(
                    'status'  => true,
                    'code'    => 200,
                    'response'=> $saveDepartment,
                    'message' => 'Department saved !'
                ));

            } else {

                return Response::json(array(
                    'status'  => false,
                    'code'    => 400,
                    'response'=> [],
                    'message' => 'Department Not saved  !'
                ));

            }
        } elseif( $userToken != "" ) {

            $getUser  = UserToken::where('token',$userToken)->with('userInfo')->first();

            if( count($getUser) != 0 ) {

                $userId   = $getUser->profile_user_id;
                $userType = $getUser->userInfo->type;

                if ($userType == 2) {

                    $saveDepartment                     = new Department;
                    $saveDepartment->department_name    = $departmentName;
                    $saveDepartment->department_details = $departmentDetails;
                    $saveDepartment->user_id            = $userId;
                    $saveDepartment->status             = 1;

                    if( $saveDepartment->save() ) {
                        if (count($agentIds) > 0) {
                            foreach ($agentIds as $agentId) {
                                $departmentAgents = new DepartmentAgentMap();
                                $departmentAgents->department_id = $saveDepartment->id;
                                $departmentAgents->user_id = $agentId['id'];
                                $departmentAgents->save();
                            }
                        }

                        return  Response::json(array(
                            'status'  => true,
                            'code'    => 200,
                            'response'=> $saveDepartment,
                            'message' => 'Department saved !'
                        ));

                    } else {

                        return  Response::json(array(
                            'status'  => false,
                            'code'    => 400,
                            'response'=> [],
                            'message' => 'Department Not saved  !'
                        ));

                    }
                } else {

                    return Response::json(array(
                        'status'  => false,
                        'code'    => 400,
                        'response'=> [],
                        'message' => 'Bad Request,UserType mismatch !'
                    ));

                }
            } else {

                return  Response::json(array(
                    'status'  => false,
                    'code'    => 400,
                    'response'=> [],
                    'message' => 'Invalid token !'
                ));

            }
        } else {

            return Response::json(array(
                'status'  => false,
                'code'    => 400,
                'response'=> [],
                'message' => 'Bad Request,User token not found  !'
            ));

        }
    }

    /**
     * Edit department
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editDepartment(Request $request)
    {
        $departmentId      = $request->departmentId;  //department id
        $departmentName    = $request->departmentName;  //department Name
        $departmentDetails = $request->departmentDetails; //Department Details
        $updateDepartment  = Department::find($departmentId);  //query for find department
        $agentIds = $request->agentIds;
        if( count($updateDepartment) !=0 ) {

            $updateDepartment->department_name    = $departmentName;
            $updateDepartment->department_details = $departmentDetails;

            if( $updateDepartment->save() ) {
                $deleteAgentDepartment = DepartmentAgentMap::where('department_id',$updateDepartment->id)->delete();
                if (count($agentIds) > 0) {
                    foreach ($agentIds as $agentId) {
                        $departmentAgents = new DepartmentAgentMap();
                        $departmentAgents->department_id = $updateDepartment->id;
                        $departmentAgents->user_id = $agentId['id'];
                        $departmentAgents->save();
                    }
                }

                return  Response::json(array(
                    'status'  => true,
                    'code'    => 200,
                    'response'=> $updateDepartment,
                    'message' => 'Department Updated !'
                ));

            } else {

                return  Response::json(array(
                    'status'  => false,
                    'code'    => 400,
                    'response'=> [],
                    'message' => 'Department not Updated !'
                ));

            }
        } else {

            return  Response::json(array(
                'status'  => false,
                'code'    => 400,
                'response'=> [],
                'message' => 'Sorry Department not found !'
            ));

        }
    }

    /**
     * Get Details of a department
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function viewDepartment(Request $request)
    {

        $departmentId = $request->departmentId;

        if( $departmentId != "" ){

            $department = Department::where('id',$departmentId)->with('userDetails')->first();
            if( count($department) != 0 ) {
                $data['department'] = $department;
                $agents = $department->departmentAgents->pluck('user_id');
                if (count($agents) > 0) {
                    $data['agents'] = User::whereIn('id',$agents)->select('id','first_name','last_name')->get();
                }
                return  Response::json(array(
                    'status'   => true,
                    'code'     => 200,
                    'response' => $data,
                    'message'  => 'Department Updated !'
                ));
            } else {

                return  Response::json(array(
                    'status'  => false,
                    'code'    => 400,
                    'response'=> [],
                    'message' => 'Sorry Department not found !'
                ));

            }
        } else {

            return  Response::json(array(
                'status'  => false,
                'code'    => 400,
                'response'=> [],
                'message' => 'Please select a department !'
            ));

        }
    }

    /**
     * Get lists of department
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function departmentList(Request $request)
    {

        $userToken = $request->token; //user Token
        $userId    = $request->userId; //user ID
        if( $userToken != "" ) {
            $checkUser  = UserToken::where('token',$userToken)->with('userInfo')->first();

            if( count($checkUser) != 0 ) {

                if( $checkUser->userInfo->type == 1 && $userId == "" ) { //Superadmin Department List

                    $allDepartment = Department::with('userDetails')->orderBy('created_at','desc')->get();
                    if(count($allDepartment) != 0){
                        $department = array();
                        foreach($allDepartment as $key=>$value){
                            $department[$key]['id'] = $value->id;
                            $department[$key]['department_name'] = $value->department_name;
                            $department[$key]['department_details'] = $value->department_details;
                            if($value->userDetails != null && $value->userDetails->company != null ){
                                $department[$key]['company_name'] = $value->userDetails->company;
                            }else{
                                $department[$key]['company_name'] = '';
                            }
                            $department[$key]['created_at'] = $value->created_at->format('Y-m-d H:i:s');
                        }
                        return  Response::json(array(
                            'status'   => true,
                            'code'     => 200,
                            'response' => $department,
                            'message'  => 'Department List!'
                        ));

                    } else {

                        return  Response::json(array(
                            'status'   => false,
                            'code'     => 400,
                            'response' => [],
                            'message'  => 'Sorry Department not found !'
                        ));

                    }
                }

                if( $checkUser->userInfo->type == 1 && $userId != "" ) { //Superadmin Department List

                    $allDepartment = Department::where('user_id',$userId)->with('userDetails')->orderBy('created_at','desc')->get();

                    if(count($allDepartment) != 0){
                        $department = array();
                        foreach($allDepartment as $key=>$value){
                            $department[$key]['id'] = $value->id;
                            $department[$key]['department_name'] = $value->department_name;
                            $department[$key]['department_details'] = $value->department_details;
                            if($value->userDetails != null && $value->userDetails->company != null ){
                                $department[$key]['company_name'] = $value->userDetails->company;
                            }else{
                                $department[$key]['company_name'] = '';
                            }
                            $department[$key]['created_at'] = $value->created_at->format('Y-m-d H:i:s');
                        }
                        return  Response::json(array(
                            'status'   => true,
                            'code'     => 200,
                            'response' => $department,
                            'message'  => 'Department List!'
                        ));

                    } else {

                        return  Response::json(array(
                            'status'   => false,
                            'code'     => 400,
                            'response' => [],
                            'message'  => 'Sorry Department not found !'
                        ));

                    }
                }

                if( $checkUser->userInfo->type == 2 ) { //Admin Department List

                    $allDepartment = Department::where('user_id',$checkUser->userInfo->id)->with('userDetails')->orderBy('created_at','desc')->get();

                    if( count($allDepartment) != 0 ) {
                        $department = array();
                        foreach($allDepartment as $key=>$value){
                            $department[$key]['id'] = $value->id;
                            $department[$key]['department_name'] = $value->department_name;
                            $department[$key]['department_details'] = $value->department_details;
                            if($value->userDetails != null && $value->userDetails->company != null ){
                                $department[$key]['company_name'] = $value->userDetails->company;
                            }else{
                                $department[$key]['company_name'] = '';
                            }
                            $department[$key]['created_at'] = $value->created_at->format('Y-m-d H:i:s');
                        }
                        return  Response::json(array(
                            'status'   => true,
                            'code'     => 200,
                            'response' => $department,
                            'message'  => 'Department List!'
                        ));

                    } else {

                        return  Response::json(array(
                            'status'   => false,
                            'code'     => 400,
                            'response' => [],
                            'message'  => 'Sorry Department not found !'
                        ));

                    }
                }
            } else {

                return  Response::json(array(
                    'status'   => false,
                    'code'     => 400,
                    'response' => [],
                    'message'  => 'Invalid Token !'
                ));

            }
        } elseif ( $userId != ""){
            //fetching the list of department for a specific user/admin
            $allDepartment = Department::where('user_id',$userId)->with('userDetails')->orderBy('created_at','desc')->get();

            if( count($allDepartment) != 0 ) {
                $department = array();
                foreach($allDepartment as $key=>$value){
                    $department[$key]['id'] = $value->id;
                    $department[$key]['department_name'] = $value->department_name;
                    $department[$key]['department_details'] = $value->department_details;
                    if($value->userDetails != null && $value->userDetails->company != null ){
                        $department[$key]['company_name'] = $value->userDetails->company;
                    }else{
                        $department[$key]['company_name'] = '';
                    }
                    $department[$key]['created_at'] = $value->created_at->format('Y-m-d H:i:s');
                }
                return  Response::json(array(
                    'status'   => true,
                    'code'     => 200,
                    'response' => $department,
                    'message'  => 'Department List!'
                ));

            } else {

                return  Response::json(array(
                    'status'   => false,
                    'code'     => 400,
                    'response' => [],
                    'message'  => 'Sorry Department not found !'
                ));

            }
        } else {

            return  Response::json(array(
                'status'  => false,
                'code'    => 400,
                'response' => [],
                'message' => 'sorry no data found !'
            ));

        }
    }

    /**
     * CHECK PRE DELETE
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkPreDeleteDepartment(Request $request)
    {
        try {
            $widgetsArray = [];
            $department = Department::findOrFail($request->deptId);
            $data['department'] = $department;
            $isSingelDepartmentWidget = false;
            $agents = $department->departmentAgents->pluck('user_id');
            if (count($agents) > 0) {
                $data['agents'] = User::whereIn('id',$agents)->select('id','first_name','last_name')->get();
            }
            $widgets = $department->getWidgets;
            if (count($widgets) > 0) {
                $widgetIds = $department->getWidgets->pluck('widget_id');
                foreach ($widgetIds as $key => $widgetId) {
                    $widgetsArray[$key] = Widgets::findOrFail($widgetId);
                    $widgetDepartmentCount = WidgetDepartmentMapping::where('widget_id',$widgetId)->count();
                    if ($widgetDepartmentCount == 1) {
                        $isSingelDepartmentWidget = true;
                    }
                }
            } else {
                $data['widgets'] = [];
            }
            $data['widgets'] = $widgetsArray;
            $data['isSingleDepartmentWidgets'] = $isSingelDepartmentWidget;
            $response = array('code' => 200, 'error' => false, 'response' => $data, 'status' => true, 'message' => 'department data');
        } catch (\Exception $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        } catch (ModelNotFoundException $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        }
        return Response()->json($response);
    }

    /**
     * Delete department
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteDepartment(Request $request)
    {
        try {
            $department = Department::findOrFail($request->deptId);
            $departmentAgent = DepartmentAgentMap::where('department_id',$request->deptId)->delete();
            $departmentWidget = WidgetDepartmentMapping::where('department_id',$request->deptId)->delete();
            $department->delete();
            $response = array('code' => 200, 'error' => false, 'response' => $request->deptId, 'status' => true, 'message' => 'Deleted Department');
        } catch (\Exception $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        } catch (ModelNotFoundException $e) {
            $response = array('code' => 400, 'error' => true, 'response' => [], 'status' => false, 'message' => $e->getMessage());
        }
        return Response()->json($response);
    }
}
