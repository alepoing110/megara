import { Component, OnInit } from '@angular/core';
import { Herramienta } from '../interfaces/interfaces';
import { HerramientaService } from '../services/herramienta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-herramienta',
  templateUrl: './editar-herramienta.component.html',
  styleUrls: ['./editar-herramienta.component.scss']
})

export class EditarHerramientaComponent implements OnInit {
  
    herramienta: Herramienta = {
      id: null,
      nombre: null,
      estado: null,    
      marca: null,  
      tipo: null,
      permanecia_dia: null,
      precio:null, 
    };

  
    id: any;
    editing: boolean = false;
    herramientas: Herramienta[];
  
    constructor(private herramientaService: HerramientaService, activatedRoute: ActivatedRoute,private router: Router) {
      this.id = activatedRoute.snapshot.params['id'];
      if(this.id){
        this.editing = true;
        this.herramientaService.get().subscribe((data: Herramienta[])=>{
        
        this.herramientas = data;
        this.herramienta = this.herramientas.find((m)=>{ return m.id == this.id });
        console.log(this.herramienta);  
      }, (error)=>{
          console.log(error);
        });
      }else{
        this.editing = false;
      }
     }
  
    saveHerramienta(){
      
      if(this.editing){
        this.herramientaService.put(this.herramienta).subscribe((data)=>{
          alert('Herramienta Actualizado');
          this.router.navigate(['/herramienta']);
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('Error al guardar datos');      
        });
      }else{
        this.herramientaService.save(this.herramienta).subscribe((data)=>{
          alert('Herramienta Guardado');
          this.router.navigate(['/herramienta']);
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
  
