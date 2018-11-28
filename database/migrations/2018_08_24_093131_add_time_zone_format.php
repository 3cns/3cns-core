<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTimeZoneFormat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('timezone', function (Blueprint $table) {
            $table->string('timezone_format')
                ->nullable()->after('timezone_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('timezone', function (Blueprint $table) {
            $table->dropColumn('timezone_format');
        });
    }
}
