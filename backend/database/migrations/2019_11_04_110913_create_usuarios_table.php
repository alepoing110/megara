<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {              
            $table->integer('ci',6);
            $table->string('nombre',20);
            $table->string('ap_paterno',20);
            $table->string('ap_materno',20);
            $table->string('nick',12);    
            $table->string('password',25);                  
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
        Schema::dropIfExists('usuarios');
    }
}
