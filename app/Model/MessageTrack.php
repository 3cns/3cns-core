<?php
/**
 * MessageTrack model to manage CRUD operation and relations of message_track table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageTrack extends Model
{

    const STATUS_INITIATED = 1;
    const STATUS_ACCEPT = 2;
    const STATUS_REJECT = 3;
    const STATUS_TRANSFER = 4;
    const STATUS_RESOLVED = 5;

    const MESSAGE_TYPE_MOBILE = 1;
    const MESSAGE_TYPE_WEB = 2;


    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_track';

}
