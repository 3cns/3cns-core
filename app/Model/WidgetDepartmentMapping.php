<?php
/**
* WidgetDepartmentMapping model to manage CRUD operation and relations of widget_department_mapping table.
*/
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class WidgetDepartmentMapping extends Model
{
    /**
    * @var boolean
    */
    public $timestamps = true;

    /**
    * @var null|string
    */
    protected $table = 'widget_department_mapping';

    /**
     * One-to-One relationship with WidgetDepartmentMapping table
     */
    public function departmentDetails(){
      return $this->hasOne('App\Model\Department','id','department_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function departmentAgents(){
        return $this->hasMany('App\Model\DepartmentAgentMap','department_id','department_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function widgetDetails() {
        return $this->belongsTo('App\Model\Widgets','id','widget_id');
    }
}
