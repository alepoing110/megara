<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquiposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipos', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('nombre',80);
            $table->string('serie',45);
            $table->string('modelo',45);
            $table->string('marca',45);
            $table->string('fabricante',45);
            $table->string('ubicacion_tecnica',80);
            $table->string('descripcion',120);
            $table->string('observaciones',45)->nullable();;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipos');
    }
}
