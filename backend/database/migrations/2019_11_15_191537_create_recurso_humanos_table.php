<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecursoHumanosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recurso_humanos', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('nombre',20);
            $table->string('ap_paterno',20);
            $table->string('ap_materno',20);
            $table->string('especialidad',45);
            $table->string('direccion',100);
            $table->tinyInteger('disponibilidad');        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recurso_humanos');
    }
}
