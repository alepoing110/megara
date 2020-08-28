<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AdicionUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //\

            $table->string('nombre',20);
            $table->string('ap_paterno',20);
            $table->string('ap_materno',20);
            $table->string('telefono',10);
            $table->string('direccion',125);
            $table->tinyInteger('rol');
            $table->date('fecha_nac');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
