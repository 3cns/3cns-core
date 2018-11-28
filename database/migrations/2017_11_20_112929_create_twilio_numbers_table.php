<?php
/**
 * CreateTwilioNumbersTable for twilio_numbers table create.
 * Table for twilio_numbers for twilio credentials of users and widget.
 */
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTwilioNumbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('twilio_numbers', function (Blueprint $table) {
          $table->engine = 'InnoDB';
          $table->increments('id');
          $table->integer('user_id')->unsigned();
          $table->integer('widget_id')->unsigned();
          $table->text('prefix')->nullable();
          $table->string('number', 255)->nullable();
          $table->text('twilio_number_sid')->nullable();
          $table->text('twilio_sub_account_sid')->nullable();
          $table->integer('twilio_credentials_id')->unsigned();
          $table->integer('number_unid');
          $table->timestamps();

          $table->foreign('widget_id')->references('id')->on('widgets');  // foreign key assign with widgets table
          $table->foreign('user_id')->references('id')->on('users');  // foreign key assign with users table
          $table->foreign('twilio_credentials_id')->references('id')->on('twilio_credential');  // foreign key assign with twilio_credential table
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('twilio_numbers');
    }
}
