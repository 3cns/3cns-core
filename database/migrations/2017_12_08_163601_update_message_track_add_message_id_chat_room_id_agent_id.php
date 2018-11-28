<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateMessageTrackAddMessageIdChatRoomIdAgentId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('message_track', function($table) {
            $table->integer('message_id')->nullable()->after('department_id');
            $table->integer('chat_room_id')->nullable()->after('message_id');
            $table->integer('agent_id')->nullable()->after('chat_room_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('message_track', function (Blueprint $table) {
            $table->dropColumn('message_id');
            $table->dropColumn('chat_room_id');
            $table->dropColumn('agent_id');
        });
    }
}
