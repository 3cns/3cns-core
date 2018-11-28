<?php
/**
 * DepartmentAgentMap model to manage CRUD operation and relations of department_agent_map table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DepartmentAgentMap extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'department_agent_map';

    /**
     * One-to-One relationship with Department table
     */

    public function departmentDetails(){

      return $this->hasOne('App\Model\Department','id','department_id');

    }

    public function agentDetails(){

        return $this->hasMany('App\Model\Users','id','user_id');

    }

}
