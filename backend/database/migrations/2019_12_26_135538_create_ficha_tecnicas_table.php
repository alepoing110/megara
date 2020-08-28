<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFichaTecnicasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ficha_tecnicas', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('orden_trabajo_id');
            $table->date('fecha_culminacion');
            $table->string('tiempo_mantenimiento',45);
            $table->integer('recurso_humano_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ficha_tecnicas');
    }
}
