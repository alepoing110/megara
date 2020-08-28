import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../interfaces/clases';
import { HttpClient } from '@angular/common/http';
import { OtService } from '../services/ot.service';

@Component({
  selector: 'app-ot',
  templateUrl: './ot.component.html',
  styleUrls: ['./ot.component.scss']
})
export class OtComponent implements OnInit {

  ordenTrabajos: OrdenTrabajo[]; 

  constructor(private otService: OtService, private httpClient:HttpClient) { 
    this.getOrden();
  }
  getOrden(){
    this.otService.get().subscribe((data: OrdenTrabajo[])=>{      
      this.ordenTrabajos = data;
      console.log(this.ordenTrabajos);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  delete(id){   
    if(confirm('Desea eliminar')){
      this.otService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getOrden();
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
