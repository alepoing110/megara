import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Equipo } from '../interfaces/equipo'
import { EquipoService } from '../services/equipo.service'

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {


  public equipos: Equipo[];
  constructor(private equipoService: EquipoService, private httpClient:HttpClient) { 
    this.getEquipos();
  }

  getEquipos(){
    this.equipoService.get().subscribe((data: Equipo[])=>{
      this.equipos = data;
      console.log(this.equipos);     
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  };

  delete(id){   
    if(confirm('desea eliminar')){
      this.equipoService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getEquipos();
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
