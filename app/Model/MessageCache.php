<?php
/**
 * ChatThread model to manage CRUD operation and relations of chat_thread table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageCache extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_cache';
}
