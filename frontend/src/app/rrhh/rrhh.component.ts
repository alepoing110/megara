import { Component, OnInit } from '@angular/core';
import { RrhhService } from '../services/rrhh.service';
import { RrHh } from '../interfaces/clases';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.scss']
})
export class RrhhComponent implements OnInit {

  rrhhs: RrHh[];
  constructor(private rrhhService:RrhhService) { }

  getRrhh(){
    this.rrhhService.get().subscribe((data: RrHh[])=>{      
      this.rrhhs = data;
      //console.log(this.rrhhs);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  delete(id){   
    if(confirm('desea eliminar')){
      this.rrhhService.delete(id).subscribe((data)=>{
        alert('Eliminado');
        this.getRrhh();
      },
      (error)=>{
        console.log(error);
        alert('Ocurrio un error al eliminar');
      });
    }
  }

  ngOnInit() {
    this.getRrhh();
  }

}
