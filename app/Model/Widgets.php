<?php
/**
* Widgets model to manage CRUD operation and relations of widgets table.
*/
namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Widgets extends Model
{
    use SoftDeletes;
    /**
    * @var boolean
    */
    public $timestamps = true;

    /**
    * @var null|string
    */
    protected $table = 'widgets';

    /**
     * One-to-One relationship with TwilioNumber table
     */
    public function twilioNumbers(){

      return $this->hasOne('App\Model\TwilioNumber','widget_id','id');

    }

    /**
     * One-to-Many relationship with WidgetDepartmentMapping table
     */
    public function widgetDepartment(){

      return $this->hasMany('App\Model\WidgetDepartmentMapping','widget_id','id');

    }

    /**
     * One-to-One relationship with WidgetScheduleMapping table
     */
    public function widgetSchedule(){

      return $this->hasMany('App\Model\WidgetScheduleMapping','widget_id','id');

    }

    /**
     * One-to-One relationship with users table
     */
    public function userDetails(){
        return $this->hasOne('App\Model\Users','id','user_id')
            ->select('id','parent_id','first_name','last_name','email','username','phone','type','company','is_phone_notification','is_email_notification');
    }

    public function agentDetails(){
        return $this->hasMany('App\Model\Users','parent_id','user_id')
            ->select('id','parent_id','first_name','last_name','email','phone','type','company','is_phone_notification','is_email_notification');
    }

}
