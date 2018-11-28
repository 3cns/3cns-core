<?php
/**
 * MessageCacheData model to manage CRUD operation and relations of message_cache_data table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MessageCacheData extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'message_cache_data';
}


