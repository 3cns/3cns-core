<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert([
          'first_name' =>'Super',
          'last_name'=>'Admin',
          'email' => 'superadmin@gmail.com',
          'username' => 'Superadmin',
          'type'=> '1',
          'password' => Hash::make('123456'),
          'profile_status'=>1,
      ]);
    }
}
