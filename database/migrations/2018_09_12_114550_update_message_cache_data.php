<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateMessageCacheData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('message_cache_data', function (Blueprint $table) {
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
        Schema::table('message_cache_data', function (Blueprint $table) {
            $table->dropColumn('is_mms');
            $table->dropColumn('file_type');
            $table->dropColumn('file_url');
        });
    }
}
