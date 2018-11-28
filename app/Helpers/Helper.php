<?php
/**
*
* @param Request $request
* @param String
*/
namespace App\Helpers;
use App\Model\UserToken; /* User Token Model */

class Helper
{
    /**
     * Get UserId from Token
     *
     * @param String
     * @return integer
     */
    public static function getUserIdFromToken($token)
    {
      $getUser = UserToken::where('token','=',$token)->first();

      if (count($getUser) != 0) {

        return $getUser->profile_user_id;

      } else {

        return 0;

      }
    }
}
?>
