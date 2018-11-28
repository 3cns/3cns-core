<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessageForwardCounterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_forward_counter', function (Blueprint $table) {
            $table->increments('id');
            $table->string('widget_id')->nullable();
            $table->string('agent_count')->nullable();
            $table->string('count_init')->nullable();
            $table->integer('message_id')->nullable();
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
        Schema::dropIfExists('message_forward_counter');
    }
}
