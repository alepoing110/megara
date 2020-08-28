<?php

namespace App\Http\Controllers;

use App\Models\insumo;
use Illuminate\Http\Request;

class InsumoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = insumo::get(); 
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
        $reporte = new insumo;
        $reporte->nombre = $request->input('nombre');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->precio = $request->input('precio');        
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\insumo  $insumo
     * @return \Illuminate\Http\Response
     */
    public function show(insumo $insumo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\insumo  $insumo
     * @return \Illuminate\Http\Response
     */
    public function edit(insumo $insumo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\insumo  $insumo_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $insumo_id)
    {
        //
        $reporte =  insumo::find($insumo_id);
        $reporte->nombre = $request->input('nombre');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->precio = $request->input('precio');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\insumo  $insumo_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($insumo_id)
    {
        //
        $insumo =  insumo::find($insumo_id);
        $insumo->delete();
    }
}
