<?php
/**
 * ChatThread model to manage CRUD operation and relations of agent_transfer_log table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AgentTransferLog extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'agent_transfer_log';

    public function getAgentInfo(){
        return $this->hasOne('App\Model\Users','id','transfer_from_agent');
    }

}
