import { Component, OnInit } from '@angular/core';
import { RrHh } from '../interfaces/clases';
import { RrhhService } from '../services/rrhh.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-rrhh',
  templateUrl: './editar-rrhh.component.html',
  styleUrls: ['./editar-rrhh.component.scss']
})
export class EditarRrhhComponent implements OnInit {

  rrhh: RrHh = {
    id: null,
    nombre: null,
    ap_paterno: null,
    ap_materno: null,
    especialidad: null,
    disponibilidad: 0,
    direccion: null
  };

  id: any;
  editing: boolean = false;
  rrhhs: RrHh[];

  constructor(private rrhhService: RrhhService,  activateRouter: ActivatedRoute, private router:Router) {
    this.id = activateRouter.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.rrhhService.get().subscribe((data: RrHh[])=>{
      
      this.rrhhs = data;
      this.rrhh = this.rrhhs.find((m)=>{ return m.id == this.id });
      console.log(this.rrhh);  
    }, (error)=>{
        console.log(error);
      });
    }else{
      this.editing = false;
    }
   }

   saveRrhh(){
      
    if(this.editing){
      this.rrhhService.put(this.rrhh).subscribe((data)=>{
        alert('RRHH Actualizado');
        this.router.navigate(['/rrhh']);
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Error al guardar datos');      
      });
    }else{
      this.rrhhService.save(this.rrhh).subscribe((data)=>{
        alert('RRHH Guardado');
        this.router.navigate(['/rrhh']);
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
