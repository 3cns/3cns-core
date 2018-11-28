<?php
/**
 * MessageTrack model to manage CRUD operation and relations of message_track table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageTrack extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_track';

}
