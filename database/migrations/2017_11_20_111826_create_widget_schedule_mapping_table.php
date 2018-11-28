<?php
/**
 * CreateWidgetScheduleMappingTable for widget_schedule_mapping table create.
 * Mapping between Widget table and Schedule.
 */
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWidgetScheduleMappingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('widget_schedule_mapping', function (Blueprint $table) {
          $table->engine = 'InnoDB';
          $table->increments('id');
          $table->integer('widget_id')->unsigned();
          $table->string('day', 255)->nullable();
          $table->time('start_time')->nullable();
          $table->time('end_time')->nullable();

          $table->foreign('widget_id')->references('id')->on('widgets');  // foreign key assign with widgets table
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('widget_schedule_mapping');
    }
}
