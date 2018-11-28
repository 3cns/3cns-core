<?php
/**
* TwilioNumber model to manage CRUD operation and relations of twilio_numbers table.
*/
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TwilioNumber extends Model
{
  /**
  * @var boolean
  */
  public $timestamps = true;

  /**
  * @var null|string
  */
  protected $table = 'twilio_numbers';

  public function getWidgetDetails(){
      return $this->hasOne('App\Model\Widgets','id','widget_id');
  }

  public function getTwilioCredentials(){
      return $this->hasOne('App\Model\TwilioCredentials','user_id','user_id');
  }
}
