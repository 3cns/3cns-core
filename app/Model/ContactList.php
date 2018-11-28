<?php
/**
 * ContactList model to manage CRUD operation and relations of contact_list table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ContactList extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'contact_list';

    /**
     * one to one relationship with message_log table
     */
    public function messageLogDetails() {

        return $this->hasOne('App\Model\MessageLog','contact_list_id','id');

    }
}
