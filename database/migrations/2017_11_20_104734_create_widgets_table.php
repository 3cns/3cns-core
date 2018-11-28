<?php
/**
 * CreateWidgetsTable for widgets table create.
 * Table for widgets for websites
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWidgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('widgets', function (Blueprint $table) {
          $table->engine = 'InnoDB';
          $table->increments('id');
          $table->integer('user_id')->unsigned();
          $table->text('website');
          $table->string('area_code')->nullable();
          $table->text('schedule_timezone')->nullable();
          $table->text('details')->nullable();
          $table->integer('status')->default(0);
          $table->timestamps();

          $table->foreign('user_id')->references('id')->on('users');  // foreign key assign with users table
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('widgets');
    }
}
