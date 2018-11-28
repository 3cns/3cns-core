<?php
/**
 * Timezone model to manage CRUD operation and relations of timezone table.
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Timezone extends Model
{
    /**
     * @var boolean
     */
    public $timestamps = true;

    /**
     * @var null|string
     */
    protected $table = 'timezone';
}
