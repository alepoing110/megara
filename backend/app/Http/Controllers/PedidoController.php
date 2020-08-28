<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $pedido = Pedido::get();
        echo json_encode($pedido);
        
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
        $pedido = new pedido;
        $pedido->total = $request->input('total');
        $pedido->fecha = $request->input('fecha');
        $pedido->usuario_ci = $request->input('usuario_ci');
        
        $pedido->save();
        echo json_encode($pedido);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\pedido  $pedido_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $pedido_id)
    {
        //
        $pedido = new pedido;
        $pedido->total = $request->input('total');
        $pedido->fecha = $request->input('fecha');
        $pedido->usuario_ci = $request->input('usuario_ci');
        $pedido->save();
        echo json_encode($pedido);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\pedido  $pedido_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($pedido_id)
    {
        //
        $pedido = pedido::find($pedido_id);
        $pedido->delete();
    }
}
