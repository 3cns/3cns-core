<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChatThreadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_thread', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('message_log_id');
            $table->integer('user_id');
            $table->longText('chat_thread');
            $table->integer('type');
            $table->integer('direction');
            $table->integer('chat_type');
            $table->integer('position');
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
        Schema::dropIfExists('chat_thread');
    }
}
