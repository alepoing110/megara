<?php

namespace App\Http\Controllers;

use App\Material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = material::get();
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
        $reporte = new material;
        $reporte->insumo_id = $request->input('insumo_id');
        $reporte->herramienta_id = $request->input('herramienta_id');
        $reporte->equipo_id = $request->input('equipo_id');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->orden_trabajo_id = $request->input('orden_trabajo_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function show(Material $material)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function edit(Material $material)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Material  $material_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $material_id)
    {
        //
        $reporte =  material::find($material_id);
        $reporte->persona_id = $request->input('persona_id');
        $reporte->orden_trabajo_id = $request->input('orden_trabajo_id');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function destroy(Material $material_id)
    {
        //
        $reporte = material::find($material_id);
        $reporte->delete();

    }
}
