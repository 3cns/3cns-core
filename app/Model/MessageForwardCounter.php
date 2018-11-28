<?php
/**
 * MessageForwardCounter model to manage CRUD operation and relations of message_forward_counter table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageForwardCounter extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_forward_counter';
}


