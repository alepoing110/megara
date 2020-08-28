import { Component, OnInit } from '@angular/core';
import { Herramienta } from '../interfaces/interfaces';
import { HerramientaService } from '../services/herramienta.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})
export class HerramientaComponent implements OnInit {

  herramientas: Herramienta[];

  constructor(private herramientaService: HerramientaService, private httpClient:HttpClient) { 
    this.getHerramientas();
  }

  getHerramientas(){
    this.herramientaService.get().subscribe((data: Herramienta[])=>{      
      this.herramientas = data;
      console.log(this.herramientas);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  delete(id){   
    if(confirm('Desea eliminar')){
      this.herramientaService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getHerramientas();
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
