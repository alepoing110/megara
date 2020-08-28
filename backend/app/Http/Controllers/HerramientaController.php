<?php

namespace App\Http\Controllers;

use App\Models\Herramienta;
use Illuminate\Http\Request;

class HerramientaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = Herramienta::get(); 
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
        $reporte = new herramienta;
        $reporte->nombre = $request->input('nombre');
        $reporte->tipo = $request->input('tipo');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->precio = $request->input('precio');
        $reporte->save();
        echo json_encode($reporte);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\herramienta  $herramienta
     * @return \Illuminate\Http\Response
     */
    public function show(herramienta $herramienta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\herramienta  $herramienta
     * @return \Illuminate\Http\Response
     */
    public function edit(herramienta $herramienta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\herramienta  $herramienta_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $herramienta_id)
    {
        //
        $reporte =  herramienta::find($herramienta_id);
        $reporte->nombre = $request->input('nombre');
        $reporte->tipo = $request->input('tipo');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->precio = $request->input('precio');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\herramienta  $herramienta_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($herramienta_id)
    {
        //
        $herramienta = herramienta::find($herramienta_id);
        $herramienta->delete();
    }
}
