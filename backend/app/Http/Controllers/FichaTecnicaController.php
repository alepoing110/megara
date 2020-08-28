<?php

namespace App\Http\Controllers;

use App\Models\FichaTecnica;
use Illuminate\Http\Request;

class FichaTecnicaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = FichaTecnica::get(); 
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
        $reporte = new FichaTecnica;
        $reporte->orden_trabajo_id = $request->input('orden_trabajo_id');
        $reporte->fecha_culminacion = $request->input('fecha_culminacion');
        $reporte->tiempo_mantenimiento = $request->input('tiempo_mantenimiento');
        $reporte->recurso_humano_id = $request->input('recurso_humano_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FichaTecnica  $fichaTecnica
     * @return \Illuminate\Http\Response
     */
    public function show(FichaTecnica $fichaTecnica)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FichaTecnica  $fichaTecnica
     * @return \Illuminate\Http\Response
     */
    public function edit(FichaTecnica $fichaTecnica)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FichaTecnica  $fichaTecnica_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $fichaTecnica_id)
    {
        //
        $repote = FichaTecnica::find($fichaTecnica_id);
        $reporte->orden_trabajo_id = $request->input('orden_trabajo_id');
        $reporte->fecha_culminacion = $request->input('fecha_culminacion');
        $reporte->tiempo_mantenimiento = $request->input('tiempo_mantenimiento');
        $reporte->recurso_humano_id = $request->input('recurso_humano_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FichaTecnica  $fichaTecnica
     * @return \Illuminate\Http\Response
     */
    public function destroy(FichaTecnica $fichaTecnica)
    {
        //
        $repote = FichaTecnica::find($fichaTecnica_id);
        $reporte->delete();
    }
}
