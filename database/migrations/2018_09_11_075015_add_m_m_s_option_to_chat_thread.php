<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMMSOptionToChatThread extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chat_thread', function (Blueprint $table) {
            $table->boolean('is_mms')->default(false);
            $table->string('file_type')->nullable();
            $table->text('file_url')->nullable();
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
            $table->dropColumn('is_mms');
            $table->dropColumn('file_type');
            $table->dropColumn('file_url');
        });
    }
}
