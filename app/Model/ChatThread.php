<?php
/**
 * ChatThread model to manage CRUD operation and relations of chat_thread table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ChatThread extends Model
{

    const DIRECTION_INCOMING = 1;
    const DIRECTION_OUTGOING = 2;

    const TYPE_MOBILE = 1;
    const TYPE_WEB = 2;

    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'chat_thread';

    public function agentInfo(){
        return $this->hasOne('App\Model\Users','id','user_id');
    }
}
