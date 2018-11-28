<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgentTransferLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agent_transfer_log', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('message_agent_track_id');
            $table->integer('transfer_from_agent_id');
            $table->integer('transfer_to_agent_id');
            $table->string('status');
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
        Schema::dropIfExists('agent_transfer_log');
    }
}
