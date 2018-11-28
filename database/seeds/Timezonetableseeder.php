<?php

use Illuminate\Database\Seeder;

class Timezonetableseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Model\Timezone::truncate();
        DB::table('timezone')->insert([
            [
                'timezone_name' => '(GMT-10:00) Hawaii',
                'timezone_format' => 'GMT-10:00',
                'time_difference' => '10:00:00',
                'action' => '0',
                'status' => '0',
            ],
            ['timezone_name' => '(GMT-9:00) AKST - Alaska Standard Time',
                'timezone_format' => 'GMT-9:00',
                'time_difference' => '09:00:00',
                'action' => '0',
                'status' => '0',
            ], ['timezone_name' => '(GMT-8:00) PST - Pacific Standard Time',
                'timezone_format' => 'GMT-8:00',
                'time_difference' => '08:00:00',
                'action' => '0',
                'status' => '0',
            ],
            ['timezone_name' => '(GMT-6:00) MST - Mountain Standard Time',
                'timezone_format' => 'GMT-6:00',
                'time_difference' => '06:00:00',
                'action' => '0',
                'status' => '0',
            ], ['timezone_name' => '(GMT-5:00) CST - Central Standard Time',
                'timezone_format' => 'GMT-5:00',
                'time_difference' => '05:00:00',
                'action' => '0',
                'status' => '0',
            ], ['timezone_name' => '(GMT-4:00) EST - Eastern Standard Time',
                'timezone_format' => 'GMT-4:00',
                'time_difference' => '04:00:00',
                'action' => '0',
                'status' => '0',
            ], ['timezone_name' => '(GMT-4:00) AST - Atlantic Standard Time',
                'timezone_format' => 'GMT-4:00',
                'time_difference' => '04:00:00',
                'action' => '0',
                'status' => '0',
            ]]);
    }
}
