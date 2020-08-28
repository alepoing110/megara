import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../interfaces/clases';
import { ProveedorService } from '../services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {
  
    proveedor: Proveedor = {
      id: null,
      nombre: null,
      nom_encargado: null,    
      telefono: null, 
      direccion: null, 
    };

  
    id: any;
    editing: boolean = false;
    proveedores: Proveedor[];
  
    constructor(private proveedorService: ProveedorService, activatedRoute: ActivatedRoute,private router: Router) {
      this.id = activatedRoute.snapshot.params['id'];
      if(this.id){
        this.editing = true;
        this.proveedorService.get().subscribe((data: Proveedor[])=>{
        
        this.proveedores = data;
        this.proveedor = this.proveedores.find((m)=>{ return m.id == this.id });
        console.log(this.proveedor);  
      }, (error)=>{
          console.log(error);
        });
      }else{
        this.editing = false;
      }
     }
  
     saveProveedor(){
      
      if(this.editing){
        this.proveedorService.put(this.proveedor).subscribe((data)=>{
          alert('Proveedor Actualizado');
          this.router.navigate(['/proveedor']);
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('Error al guardar datos');      
        });
      }else{
        this.proveedorService.save(this.proveedor).subscribe((data)=>{
          alert('Proveedor Guardado');
          this.router.navigate(['/proveedor']);
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('error al guardar');      
        });
      }    
    }
  
    ngOnInit() {
    }
  
  }
  