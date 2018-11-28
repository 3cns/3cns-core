<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNotificationInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('is_email_notification',['0','1'])->default(1)->after('company')->comment('0 => OFF, 1 => ON');
            $table->enum('is_phone_notification',['0','1'])->default(1)->after('company')->comment('0 => OFF, 1 => ON');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('is_email_notification');
            $table->dropColumn('is_phone_notification');
        });
    }
}
