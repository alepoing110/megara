import { Component, OnInit } from '@angular/core';
import { Equipo } from '../interfaces/clases';
import { EquipoService } from '../services/equipo.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.scss']
})
export class EditarEquipoComponent implements OnInit {
  equipo: Equipo = {
    id: null,
    nombre: null,
    serie: null,
    modelo: null,
    marca: null,
    fabricante: null,
    ubicacion_tecnica: null,
    descripcion: null,
    observaciones: null,
  };
  
  id: any;
  editing: boolean = false;
  equipos : Equipo[];
  constructor(private equipoService: EquipoService, activatedRoute: ActivatedRoute, private router: Router) { 
    this.id = activatedRoute.snapshot.params['id'];
      if(this.id){
        this.editing = true;
        this.equipoService.get().subscribe((data: Equipo[])=>{       
        this.equipos = data;
        this.equipo = this.equipos.find((m)=>{ return m.id == this.id });
        //console.log(this.equipo);  
      }, (error)=>{
          console.log(error);
        });
      }else{
        this.editing = false;
      }
  }
  saveEquipo(){
      
    if(this.editing){
      this.equipoService.put(this.equipo).subscribe((data)=>{
        alert('Equipo actualizado');
        this.router.navigate(['/equipo']);
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Error al actualizar datos');      
      });
    }else{
      this.equipoService.save(this.equipo).subscribe((data)=>{
        alert('Equipo guardado ');
        this.router.navigate(['/equipo']);
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
