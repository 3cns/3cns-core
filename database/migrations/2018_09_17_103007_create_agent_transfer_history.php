<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgentTransferHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agent_transfer_history', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('message_agent_track_id')->nullable();
            $table->integer('transfer_from_agent_id')->nullable();
            $table->integer('transfer_to_agent_id')->nullable();
            $table->integer('chat_room_id')->nullable();
            $table->integer('last_chat_thread_id')->nullable();;
            $table->integer('message_id')->nullable();
            $table->string('other_agent_ids')->nullable();
            $table->string('transfer_time')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agent_transfer_history');
    }
}
