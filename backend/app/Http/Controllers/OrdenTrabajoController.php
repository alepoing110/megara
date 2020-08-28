<?php

namespace App\Http\Controllers;

use App\Models\OrdenTrabajo;
use Illuminate\Http\Request;

class OrdenTrabajoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = OrdenTrabajo::get(); 
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
        $reporte = new OrdenTrabajo;
        $reporte->fecha = $request->input('fecha');
        $reporte->descripcion = $request->input('descripcion'); 
        $reporte->nom_supervisor_empresa = $request->input('nom_supervisor_empresa');
        $reporte->nom_empresa = $request->input('nom_empresa');
        $reporte->equipo_id = $request->input('equipo_id');
        $reporte->equipo_empresa = $request->input('equipo_empresa');
        $reporte->marca_empresa = $request->input('marca_empresa');
        $reporte->modelo_empresa = $request->input('modelo_empresa')->nullable();
        $reporte->procedencia_empresa = $request->input('procedencia_empresa');
        $reporte->procedencia_ano_empresa = $request->input('procedencia_ano_empresa');
        $reporte->instalado_por_empresa = $request->input('instalado_por_empresa');
        $reporte->instalado_por_ano_empresa = $request->input('instalado_por_ano_empresa');
        $reporte->ubicacion_tecnica_empresa = $request->input('ubicacion_tecnica_empresa');
        $reporte->num_inventario_empresa = $request->input('num_inventario_empresa');
        $reporte->funcion_empresa = $request->input('funcion_empresa');
        $reporte->tipo_empresa = $request->input('tipo_empresa');
        $reporte->serie_empresa = $request->input('serie_empresa');
        $reporte->fecha_inicio = $request->input('fecha_inicio');
        $reporte->insumo_id = $request->input('insumo_id');
        $reporte->herramienta_id = $request->input('herramienta_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrdenTrabajo  $ordenTrabajo
     * @return \Illuminate\Http\Response
     */
    public function show(OrdenTrabajo $ordenTrabajo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrdenTrabajo  $ordenTrabajo
     * @return \Illuminate\Http\Response
     */
    public function edit(OrdenTrabajo $ordenTrabajo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrdenTrabajo  $ordenTrabajo_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $ordenTrabajo_id)
    {
        //
        $reporte = OrdenTrabajo::find($ordenTrabajo_id);
        $reporte->fecha = $request->input('fecha');
        $reporte->descripcion = $request->input('descripcion');
        $reporte->nom_supervisor_empresa = $request->input('nom_supervisor_empresa');
        $reporte->nom_empresa = $request->input('nom_empresa');
        $reporte->equipo_id = $request->input('equipo_id');
        $reporte->equipo_empresa = $request->input('equipo_empresa');
        $reporte->marca_empresa = $request->input('marca_empresa');
        $reporte->modelo_empresa = $request->input('modelo_empresa');
        $reporte->procedencia_empresa = $request->input('procedencia_empresa');
        $reporte->procedencia_ano_empresa = $request->input('procedencia_ano_empresa');
        $reporte->instalado_por_empresa = $request->input('instalado_por_empresa');
        $reporte->instalado_por_ano_empresa = $request->input('instalado_por_ano_empresa');
        $reporte->ubicacion_tecnica_empresa = $request->input('ubicacion_tecnica_empresa');
        $reporte->num_inventario_empresa = $request->input('num_inventario_empresa');
        $reporte->funcion_empresa = $request->input('funcion_empresa');
        $reporte->tipo_empresa = $request->input('tipo_empresa');
        $reporte->serie_empresa = $request->input('serie_empresa');
        $reporte->fecha_inicio = $request->input('fecha_inicio');
        $reporte->save();
        echo json_encode($reporte);
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrdenTrabajo  $ordenTrabajo_id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $ordenTrabajo)
    {
        //
        $reporte = OrdenTrabajo::find($ordenTrabajo_id);
        $reporte->delete();
    }
}
