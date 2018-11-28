<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateChatThreadTableUpdateDefultValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chat_thread', function($table) {
            $table->integer('message_log_id')->nullable()->change();
            $table->integer('user_id')->nullable()->change();
            $table->longtext('chat_thread')->nullable()->change();
            $table->string('message')->nullable()->change();
            $table->integer('type')->nullable()->change();
            $table->integer('direction')->nullable()->change();
            $table->integer('chat_type')->nullable()->change();
            $table->integer('position')->nullable()->change();
            $table->string('status')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('chat_thread', function (Blueprint $table) {
            $table->dropColumn('message_log_id');
            $table->dropColumn('user_id');
            $table->dropColumn('chat_thread');
            $table->dropColumn('status');
            $table->dropColumn('message');
            $table->dropColumn('type');
            $table->dropColumn('direction');
            $table->dropColumn('chat_type');
            $table->dropColumn('position');
            $table->dropColumn('status');

        });
    }
}
