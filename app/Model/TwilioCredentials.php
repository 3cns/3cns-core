<?php
/**
* TwilioCredentials model to manage CRUD operation and relations of twilio_credential table.
*/

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TwilioCredentials extends Model
{
  /**
  * @var boolean
  */
  public $timestamps = true;

  /**
  * @var string
  */
  protected $table = 'twilio_credential';

  public function userInfo(){
    return $this->hasOne('App\Model\Users','id','user_id');
  }
}
