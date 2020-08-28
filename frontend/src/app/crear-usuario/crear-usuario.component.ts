import { Component, OnInit } from '@angular/core';
import { Rol, Usuario } from '../interfaces/clases';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
    roles: Rol[] = [];

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
  ci: any;
  editing: boolean = false;
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, activatedRoute: ActivatedRoute, private router: Router) {
    this.ci = activatedRoute.snapshot.params['ci'];
    if(this.ci){

      this.editing = true;
      this.usuarioService.get().subscribe((data: Usuario[])=>{

      this.usuarios = data;
      this.usuario = this.usuarios.find((m)=> { return m.ci == this.ci});
      console.log(this.usuario);

    }, (error)=>{
        console.log(error);
      });
    }else{
      this.editing = false;
    }
   }
   saveUsuario(){

    if(this.editing){
      this.usuarioService.put(this.usuario).subscribe((data)=>{
        alert('Usuario Actualizado');
        this.router.navigate(['/usuario']);

        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Error al guardar datos');
      });
    }else{
      this.usuarioService.save(this.usuario).subscribe((data)=>{
        alert('Usuario Guardado');
        this.router.navigate(['/usuario']);
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('error al guardar');
      });
    }
  }

  ngOnInit() {
    this.roles.push(new Rol("1","Planificador"))
    this.roles.push(new Rol("2","Supervisor"))
    this.roles.push(new Rol("3","Almacenes"))
    this.roles.push(new Rol("4","Operador"))

  }

}
