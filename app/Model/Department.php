<?php
/**
* Department model to manage CRUD operation and relations of department table.
*/
namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use softDeletes;
	/**
	* @var boolean
	*/
	public $timestamps = true;

	/**
	* @var null|string
	*/
	protected $table = 'department';

	/**
    * one to one relationship with users table
    */
    public function userDetails()       {
        return $this->hasOne('App\Model\Users','id','user_id')
            ->select('id','parent_id','first_name','last_name','email','username','phone','type','company');
    }

    /**
     * One to many relation with DepartmentAgentMap table
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function departmentAgents() {
        return $this->hasMany('App\Model\DepartmentAgentMap','department_id','id');
    }

    public function getWidgets() {
        return $this->hasMany('App\Model\WidgetDepartmentMapping','department_id','id');
    }
}
