<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateChatThreadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chat_thread', function($table) {
            $table->integer('widget_id')->nullable()->after('user_id');
            $table->integer('message')->nullable()->after('chat_thread');
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
            $table->dropColumn('widget_id');
            $table->dropColumn('message');
        });
    }
}
