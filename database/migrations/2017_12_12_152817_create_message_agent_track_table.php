<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessageAgentTrackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_agent_track', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('agent_id')->nullable();
            $table->integer('message_id')->nullable();
            $table->string('chat_room_id')->nullable();
            $table->string('widget_id')->nullable();
            $table->integer('message_forward_counter_id')->nullable();
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
        Schema::dropIfExists('message_agent_track');
    }
}
