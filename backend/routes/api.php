<?php




Route::post('login', 'AuthController@login');
Route::post('signup', 'AuthController@signup');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::post('me', 'AuthController@me');

Route::resource('proveedor','ProveedorController');
Route::resource('usuario','UsuarioController');
Route::resource('pedido','PedidoController');
Route::resource('recurso','RecursoHumanoController');
Route::resource('detalle','DetallePedidoController');
Route::resource('herramienta','HerramientaController');
Route::resource('insumo','InsumoController');
Route::resource('reporte','ReporteController');
Route::resource('orden','OrdenTrabajoController');
Route::resource('equipo','EquipoController');
Route::resource('ficha','FichaTecnicaController');
Route::resource('grupo','GrupoTrabajoController');
Route::resource('material','MaterialController');

