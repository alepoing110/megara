import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../interfaces/clases'
import { UsuarioService } from '../services/usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  lista:string[]= ["Planificador","Supervisor","Almacenes", "Operador"];
  public usuarios: Usuario[];
  usuario: Usuario = {
    ci: null,
    nombre: null,
    ap_paterno: null,
    ap_materno: null,
    nick: null, 
    password: null,
    telefono: null, 
    direccion: null, 
    rol: null, 
    fecha_nac: null 
  };
  constructor(private usuariosService: UsuarioService, private httpClient:HttpClient) { 
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.get().subscribe((data: Usuario[])=>{
      this.usuarios = data;
      console.log(this.usuarios);     
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  };

  delete(id){   
    if(confirm('desea eliminar')){
      this.usuariosService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getUsuarios();
      },
      (error)=>{
        console.log(error);
        alert('Ocurrio un error al eliminar');
      });
    }
  } 

  ngOnInit() {
  }

}
