<?php
/**
 * MessageAgentTrack model to manage CRUD operation and relations of message_agent_track table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageAgentTrack extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_agent_track';

    public function clientInfo(){
        return $this->hasOne('App\Model\MessageLog','id','message_id');
    }

    public function allChat(){
        return $this->hasMany('App\Model\ChatThread','message_log_id','message_id');
    }

    public function getWidget(){
        return $this->hasOne('App\Model\Widgets','widget_uuid','widget_id');
    }

    public function getUserInfo(){
        return $this->hasOne('App\Model\Users','id','agent_id');
    }

    public function getTransferLog(){
        return $this->hasMany('App\Model\AgentTransferLog','message_agent_track_id','id');
    }

}



