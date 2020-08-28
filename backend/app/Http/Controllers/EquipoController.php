<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = Equipo::get(); 
        echo json_encode($reporte);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $reporte = new Equipo;
        $reporte->nombre = $request->input('nombre');
        $reporte->serie = $request->input('serie');
        $reporte->modelo = $request->input('modelo');
        $reporte->marca = $request->input('marca');
        $reporte->fabricante = $request->input('fabricante');
        $reporte->ubicacion_tecnica = $request->input('ubicacion_tecnica');
        $reporte->descripcion = $request->input('descripcion');
        $reporte->observaciones = $request->input('observaciones');
        $reporte->save();
        echo json_encode($reporte);

    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Equipo  $equipo_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $equipo_id)
    {
        //
        $reporte = Equipo::find($equipo_id);
        $reporte->nombre = $request->input('nombre');
        $reporte->serie = $request->input('serie');
        $reporte->modelo = $request->input('modelo');
        $reporte->marca = $request->input('marca');
        $reporte->fabricante = $request->input('fabricante');
        $reporte->ubicacion_tecnica = $request->input('ubicacion_tecnica');
        $reporte->descripcion = $request->input('descripcion');
        $reporte->observaciones = $request->input('observaciones');
        $reporte->save();
        echo json_encode($reporte);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Equipo  $equipo_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($equipo_id)
    {
        //
        $equipo = Equipo::find($equipo_id);
        $equipo->delete();
    }
}
