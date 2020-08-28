<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdenTrabajosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orden_trabajos', function (Blueprint $table) {
            $table->Increments('id');
            $table->date('fecha');
            $table->string('descripcion');
            $table->string('nom_supervisor_empresa',100);
            $table->string('nom_empresa',45);
            $table->integer('equipo_id');
            $table->string('equipo_empresa',60);
            $table->string('marca_empresa',45);
            $table->string('modelo_empresa',15);            
            $table->string('procedencia_empresa',45);
            $table->date('procedencia_ano_empresa');
            $table->string('instalado_por_empresa',80);
            $table->date('instalado_por_ano_empresa');
            $table->string('ubicacion_tecnica_empresa',50);
            $table->string('num_inventario_empresa',15);
            $table->string('funcion_empresa',45);
            $table->string('tipo_empresa',45);
            $table->string('serie_empresa',15);
            $table->date('fecha_inicio',45);
            $table->integer('insumo_id');
            $table->integer('herramienta_id');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orden_trabajos');
    }
}
