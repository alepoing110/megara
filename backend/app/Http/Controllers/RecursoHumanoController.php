<?php

namespace App\Http\Controllers;

use App\Models\RecursoHumano;
use Illuminate\Http\Request;

class RecursoHumanoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = RecursoHumano::get(); 
        echo json_encode($reporte);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $reporte = new RecursoHumano;
        $reporte->nombre = $request->input('nombre');
        $reporte->ap_paterno = $request->input('ap_paterno');
        $reporte->ap_materno = $request->input('ap_materno');
        $reporte->especialidad = $request->input('especialidad');
        $reporte->disponibilidad = $request->input('disponibilidad');
        $reporte->direccion = $request->input('direccion');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RecursoHumano  $recursoHumano
     * @return \Illuminate\Http\Response
     */
    public function show(RecursoHumano $recursoHumano)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RecursoHumano  $recursoHumano
     * @return \Illuminate\Http\Response
     */
    public function edit(RecursoHumano $recursoHumano)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RecursoHumano  $recursoHumano_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $recursoHumano_id)
    {
        //
        $reporte =  RecursoHumano::find($recursoHumano_id);
        $reporte->nombre = $request->input('nombre');
        $reporte->ap_paterno = $request->input('ap_paterno');
        $reporte->ap_materno = $request->input('ap_materno');
        $reporte->especialidad = $request->input('especialidad');
        $reporte->disponibilidad = $request->input('disponibilidad');
        $reporte->direccion = $request->input('direccion');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RecursoHumano  $recursoHumano_id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $recursoHumano_id)
    {
        //
        $reporte = RecursoHumano::find($recursoHumano_id);
        $reporte->delete();
    }
}
