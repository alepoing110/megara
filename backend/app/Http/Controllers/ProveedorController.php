<?php

namespace App\Http\Controllers;

use App\Models\Proveedor;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $proveedor = Proveedor::get();        
        echo json_encode($proveedor);
        
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
        $proveedor = new Proveedor;
        $proveedor->nombre = $request->input('nombre');
        $proveedor->nom_encargado = $request->input('nom_encargado');
        $proveedor->direccion = $request->input('direccion');
        $proveedor->telefono = $request->input('telefono');
        $proveedor->save();
        echo json_encode($proveedor);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Proveedor  $proveedor_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $proveedor_id)
    {
        //
        $proveedor = Proveedor::find($proveedor_id);
        $proveedor->nombre = $request->input('nombre');
        $proveedor->nom_encargado = $request->input('nom_encargado');
        $proveedor->direccion = $request->input('direccion');
        $proveedor->telefono = $request->input('telefono');
        $proveedor->save();
        echo json_encode($proveedor);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Proveedor  $proveedor_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($proveedor_id)
    {
        //
        $proveedor = Proveedor::find($proveedor_id);
        $proveedor->delete();
    }
}
