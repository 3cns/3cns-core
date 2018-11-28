<?php
/**
 * MessageLog model to manage CRUD operation and relations of message_log table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageLog extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_log';

    public function clientName(){
        return $this->hasOne('App\Model\ContactList','id','contact_list_id')->groupBy('phone');
    }
}
