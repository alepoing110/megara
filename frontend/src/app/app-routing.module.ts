import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { EquipoComponent } from './equipo/equipo.component';
import { EditarEquipoComponent } from './editar-equipo/editar-equipo.component';
import { HerramientaComponent } from './herramienta/herramienta.component';
import { EditarHerramientaComponent } from './editar-herramienta/editar-herramienta.component';
import { InsumoComponent } from './insumo/insumo.component';
import { EditarInsumoComponent } from './editar-insumo/editar-insumo.component';
import { EditarInsumoAnadirComponent } from './editar-insumo-anadir/editar-insumo-anadir.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { LoginComponent } from './login/login.component';
import { OtComponent } from './ot/ot.component';
import { EditarOtComponent } from './editar-ot/editar-ot.component';
import { from } from 'rxjs';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FichaComponent } from './ficha/ficha.component';
import { EditarFichaComponent } from './editar-ficha/editar-ficha.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { EditarRrhhComponent } from './editar-rrhh/editar-rrhh.component';
import { GrupoTrabajoComponent } from './grupo-trabajo/grupo-trabajo.component';
import { EditarHerramientaAnadirComponent } from './editar-herramienta-anadir/editar-herramienta-anadir.component';




const routes: Routes = [

  //{path:'inicio',component:InicioComponent},
  //{path:'',component:LoginComponent},

  {path:'usuario',component:UsuarioComponent},  
  {path:'editar/usuario',component:CrearUsuarioComponent},
  {path:'editar/usuario/:ci',component:EditarUsuarioComponent},

  {path:'proveedor',component:ProveedorComponent},
  {path:'editar/proveedor',component:EditarProveedorComponent},
  {path:'editar/proveedor/:id',component:EditarProveedorComponent},

  {path:'equipo',component:EquipoComponent},
  {path:'editar/equipo',component:EditarEquipoComponent},
  {path:'editar/equipo/:id',component:EditarEquipoComponent},

  {path:'herramienta',component:HerramientaComponent},
  {path:'editar/herramienta',component:EditarHerramientaComponent},
  {path:'editar/herramienta/:id',component:EditarHerramientaComponent},
  {path:'editar/herramienta-anadir/:id',component:EditarHerramientaAnadirComponent},

  {path:'insumo',component:InsumoComponent},
  {path:'editar/insumo',component:EditarInsumoComponent},
  {path:'editar/insumo/:id',component:EditarInsumoComponent},
  {path:'editar/insumo-anadir/:id',component:EditarInsumoAnadirComponent},

  {path:'orden',component:OtComponent},
  {path:'editar/orden',component:EditarOtComponent},
  {path:'editar/orden/:id',component:EditarOtComponent},
  
  {path:'editar/pedido',component:EditarPedidoComponent},
  {path:'editar/pedido/:id',component:EditarPedidoComponent},

  {path:'ficha',component:FichaComponent},
  {path:'editar/ficha',component:EditarFichaComponent},
  {path:'editar/ficha/:id',component:EditarFichaComponent},

  {path:'rrhh',component:RrhhComponent},
  {path:'editar/rrhh',component:EditarRrhhComponent},
  {path:'editar/rrhh/:id',component:EditarRrhhComponent},
  
  //{path: 'grupo-trabajo', component:GrupoTrabajoComponent},
  //{path: 'grupo-trabajo/:id', component:GrupoTrabajoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
