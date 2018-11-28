<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateMessageLogTableUpdateDefultValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('message_log', function($table) {
            $table->string('widget_id')->nullable()->change();
            $table->integer('user_id')->nullable()->change();
            $table->integer('contact_list_id')->nullable()->change();
            $table->string('status')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('message_log', function (Blueprint $table) {
            $table->dropColumn('widget_id');
            $table->dropColumn('user_id');
            $table->dropColumn('contact_list_id');
            $table->dropColumn('status');
        });
    }
}
