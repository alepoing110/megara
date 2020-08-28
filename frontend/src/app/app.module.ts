import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { InicioComponent } from './inicio/inicio.component';

import { EditarEquipoComponent } from './editar-equipo/editar-equipo.component';
import { EquipoComponent } from './equipo/equipo.component';
import { EditarHerramientaComponent } from './editar-herramienta/editar-herramienta.component';
import { HerramientaComponent } from './herramienta/herramienta.component';
import { EditarInsumoComponent } from './editar-insumo/editar-insumo.component';
import { InsumoComponent } from './insumo/insumo.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { LoginComponent } from './login/login.component';
import { OtComponent } from './ot/ot.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { EditarOtComponent } from './editar-ot/editar-ot.component';
import { from } from 'rxjs';
import { EditarInsumoAnadirComponent } from './editar-insumo-anadir/editar-insumo-anadir.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FichaComponent } from './ficha/ficha.component';
import { EditarFichaComponent } from './editar-ficha/editar-ficha.component';
import { EditarRrhhComponent } from './editar-rrhh/editar-rrhh.component';
import { GrupoTrabajoComponent } from './grupo-trabajo/grupo-trabajo.component';
import { CrearRrhhComponent } from './crear-rrhh/crear-rrhh.component';
import { EditarHerramientaAnadirComponent } from './editar-herramienta-anadir/editar-herramienta-anadir.component';
import { EditarReporteComponent } from './editar-reporte/editar-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EditarUsuarioComponent,
    ProveedorComponent,
    EditarProveedorComponent,
    InicioComponent,
    EditarEquipoComponent,
    EquipoComponent,
    EditarHerramientaComponent,
    HerramientaComponent,
    EditarInsumoComponent,
    InsumoComponent,
    EditarPedidoComponent,
    LoginComponent,
    OtComponent,
    RrhhComponent,
    EditarOtComponent,
    EditarInsumoAnadirComponent,
    CrearUsuarioComponent,
    FichaComponent,
    EditarFichaComponent,
    EditarRrhhComponent,
    GrupoTrabajoComponent,
    CrearRrhhComponent,
    EditarHerramientaAnadirComponent,
    EditarReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
