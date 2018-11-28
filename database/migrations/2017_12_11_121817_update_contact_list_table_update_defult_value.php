<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateContactListTableUpdateDefultValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('contact_list', function($table) {
            $table->text('widget_id')->nullable()->change();
            $table->integer('up_thread')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contact_list', function (Blueprint $table) {
            $table->dropColumn('widget_id');
            $table->dropColumn('up_thread');
        });
    }
}
