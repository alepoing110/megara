import { Component, OnInit } from '@angular/core';
import { Usuario, Login } from '../interfaces/clases';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: string = null;
  password: string = null;
  rol: number = 0;
  vacio: boolean = false;
  existe: boolean = false;

  bienvenida: boolean = false;
  login_confirmacion: boolean = true;
  usuario_condicion: boolean = false;
  inventario_condicion: boolean = false;
  proveedor_condicion: boolean = false;
  rrhh_condicion: boolean = false;
  ot_condicion: boolean = false;

  usuarios: Usuario[];
  logins: Login[] = [];


  constructor(private usuariosService: UsuarioService, private httpClient:HttpClient) {

  }

  getUsuarios(){

    this.usuariosService.get().subscribe((data: Usuario[])=>{
      //this.usuarios = data;
      //console.log(data)
      if(data.length==0){
        this.vacio = true;
        if(this.usuario=='admin'&&this.password=='admin'){
          this.rol = 1;
          this.existe = true;

        }
        else
          this.existe = false;
        this.ingresar();
      }

      else{
        this.vacio = false;
        for (let num of data) {
          if(num.nick == this.usuario && num.password == this.password){
            this.rol = num.rol;
            this.existe = true;
            break;
          }
          else
            this.existe = false;

        }
        this.ingresar();
      }
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  ngOnInit() {
  }

  salir(){
    this.usuario_condicion = false;
    this.inventario_condicion = false;
    this.proveedor_condicion = false;
    this.rrhh_condicion = false;
    this.ot_condicion = false;
    this.login_confirmacion = true;
    this.usuario = null;
    this.password = null;
    this.rol = 0;
    this.existe = false;
    this.bienvenida = false;
  }

  ingresar(){

    if(this.existe){
      if(this.rol==1){
        this.bienvenida = false
        this.usuario_condicion = true;
        this.inventario_condicion = true;
        this.proveedor_condicion = true;
        this.rrhh_condicion = true;
        this.ot_condicion = true;
        this.login_confirmacion = false;
      }

      if(this.rol==2){
        this.bienvenida = false
        this.usuario_condicion = false;
        this.inventario_condicion = false;
        this.proveedor_condicion = false;
        this.rrhh_condicion = true;
        this.ot_condicion = true;
        this.login_confirmacion = false;
      }

      if(this.rol==3){
        this.bienvenida = false
        this.usuario_condicion = false;
        this.inventario_condicion = true;
        this.proveedor_condicion = true;
        this.rrhh_condicion = false;
        this.ot_condicion = false;
        this.login_confirmacion = false;
      }

      if(this.rol==4){
        this.bienvenida = false
        this.usuario_condicion = false;
        this.inventario_condicion = false;
        this.proveedor_condicion = false;
        this.rrhh_condicion = false;
        this.ot_condicion = true;
        this.login_confirmacion = false;
      }
    }
    else
      alert('Usuario o contraseña incorrecta');
  }
}
