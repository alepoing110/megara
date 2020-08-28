import { Component, OnInit } from '@angular/core';
import { Insumo } from '../interfaces/clases';
import { InsumoService } from '../services/insumo.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.scss']
})
export class InsumoComponent implements OnInit {

  insumos: Insumo[];

  constructor(private insumoService: InsumoService, private httpClient:HttpClient) { 
    this.getInsumos();
  }

  getInsumos(){
    this.insumoService.get().subscribe((data: Insumo[])=>{      
      this.insumos = data;
      console.log(this.insumos);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  delete(id){   
    if(confirm('Desea eliminar')){
      this.insumoService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getInsumos();
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
