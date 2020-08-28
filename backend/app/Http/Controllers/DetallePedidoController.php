<?php

namespace App\Http\Controllers;

use App\Models\detalle_pedido;
use Illuminate\Http\Request;

class DetallePedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reporte = detalle_pedido::get(); 
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
        //
        $reporte = new detalle_pedido;
        $reporte->precio = $request->input('precio');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->pedido_id = $request->input('pedido_id');
        $reporte->herramienta_id = $request->input('herramienta_id');
        $reporte->insumo_id = $request->input('insumo_id');
        $reporte->proveedor_id = $request->input('proveedor_id');  
        $reporte->save();
        echo json_encode($reporte);          
    }

   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\detalle_pedido  $detalle_pedido_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $detalle_pedido_id)
    {
        //
        $reporte= Detalle::find($detalle_pedido_id);
        $reporte->precio = $request->input('precio');
        $reporte->cantidad = $request->input('cantidad');
        $reporte->pedido = $request->input('pedido_id');
        $reporte->herramienta_id = $request->input('herramienta_id');
        $reporte->insumo_id = $request->input('insumo_id');
        $reporte->proveedor_id = $request->input('proveedor_id');  
        $reporte->save();
        echo json_encode($reporte);    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\detalle_pedido  $detalle_pedido_id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $detalle_pedido_id)
    {
        //
        $reporte= Detalle::find($detalle_pedido_id);
        $reporte->delete();
    }
}
