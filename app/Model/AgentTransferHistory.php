<?php
/**
 * ChatThread model to manage CRUD operation and relations of agent_transfer_history table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AgentTransferHistory extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'agent_transfer_history';


    public function clientInfo(){
            return $this->hasOne('App\Model\MessageLog','id','message_id');
    }

     public function allChat(){
             return $this->hasMany('App\Model\ChatThread','message_log_id','message_id');
    }


}
