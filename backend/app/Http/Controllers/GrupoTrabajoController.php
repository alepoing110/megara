<?php

namespace App\Http\Controllers;

use App\Models\GrupoTrabajo;
use Illuminate\Http\Request;

class GrupoTrabajoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = GrupoTrabajo::get(); 
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
        $reporte = new GrupoTrabajo;
        $reporte->personal_id = $request->input('personal_id');
        $reporte->orden_trabajo_id = $request->input('orden_trabajo_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GrupoTrabajo  $grupoTrabajo
     * @return \Illuminate\Http\Response
     */
    public function show(GrupoTrabajo $grupoTrabajo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GrupoTrabajo  $grupoTrabajo
     * @return \Illuminate\Http\Response
     */
    public function edit(GrupoTrabajo $grupoTrabajo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GrupoTrabajo  $grupoTrabajo_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $grupoTrabajo_id)
    {
        //
        $reporte =  GrupoTrabajo::find($grupoTrabajo_id);
        $reporte->persona_id = $request->input('persona_id');
        $reporte->orden_trabajo_id = $request->input('orden_trabajo_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GrupoTrabajo  $grupoTrabajo_id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $grupoTrabajo_id)
    {
        //
        $reporte = GrupoTrabajo::find($grupoTrabajo_id);
        $reporte->delete();

    }
}
