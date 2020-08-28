<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $usuario = Usuario::get(); 
        echo json_encode($usuario);
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
        $usuario = new Usuario;
        $usuario->ci = $request->input('ci');
        $usuario->nombre = $request->input('nombre');
        $usuario->ap_paterno = $request->input('ap_paterno');
        $usuario->ap_materno = $request->input('ap_materno');
        $usuario->nick = $request->input('nick');
        $usuario->password = $request->input('password');  
        $usuario->telefono = $request->input('telefono');
        $usuario->direccion = $request->input('direccion');
        $usuario->rol = $request->input('rol');
        $usuario->fecha_nac = $request->input('fecha_nac');
        $usuario->save();
        echo json_encode($usuario);
    }    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Usuario  $usuario_ci
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $usuario_ci)
    {
        //
        $usuario = Usuario::find($usuario_ci);
        $usuario->ci = $request->input('ci');
        $usuario->nombre = $request->input('nombre');
        $usuario->ap_paterno = $request->input('ap_paterno');
        $usuario->ap_materno = $request->input('ap_materno');
        $usuario->nick = $request->input('nick');     
        $usuario->password = $request->input('password');   
        $usuario->telefono = $request->input('telefono');
        $usuario->direccion = $request->input('direccion');
        $usuario->rol = $request->input('rol');
        $usuario->fecha_nac = $request->input('fecha_nac');
        $usuario->save();
        echo json_encode($usuario);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Usuario  $usuario_ci
     * @return \Illuminate\Http\Response
     */
    public function destroy( $usuario_ci)
    {
        //
        $usuario = Usuario::find($usuario_ci);
        $usuario->delete();
    }
} 
