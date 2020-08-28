import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../interfaces/clases';
import { ProveedorService } from '../services/proveedor.service';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedores: Proveedor[];

  constructor(private proveedorService: ProveedorService, private httpClient:HttpClient) { 
    this.getProveedores();

  }

  getProveedores(){
    this.proveedorService.get().subscribe((data: Proveedor[])=>{      
      this.proveedores = data;
      console.log(this.proveedores);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  delete(id){   
    if(confirm('desea eliminar')){
      this.proveedorService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getProveedores();
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
