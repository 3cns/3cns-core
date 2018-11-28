<?php
/**
 * CreateWidgetDepartmentMappingTable for widget_department_mapping table create.
 * Mapping between Widget table and Depart table.
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWidgetDepartmentMappingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('widget_department_mapping', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('widget_id')->unsigned();
            $table->integer('department_id')->unsigned();
            $table->timestamps();

            $table->foreign('widget_id')->references('id')->on('widgets');  // foreign key assign with widgets table
            $table->foreign('department_id')->references('id')->on('department');  // foreign key assign with department table
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('widget_department_mapping');
    }
}
