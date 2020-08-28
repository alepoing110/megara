import { Component, OnInit } from '@angular/core';
import { HerramientaService } from '../services/herramienta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Herramienta } from '../interfaces/clases';

@Component({
  selector: 'app-editar-herramienta-anadir',
  templateUrl: './editar-herramienta-anadir.component.html',
  styleUrls: ['./editar-herramienta-anadir.component.scss']
})
export class EditarHerramientaAnadirComponent implements OnInit {
  herramientas: Herramienta[];

  herramienta: Herramienta = {
    cantidad: null,
    id: null,
    nombre: null,
    precio: null,
    tipo: null
  }
  valor: number = 0;
  id: any;
  constructor(private herramientaService: HerramientaService, activatedRoute: ActivatedRoute,private router: Router) {
    this.id = activatedRoute.snapshot.params['id'];
      this.herramientaService.get().subscribe((data: Herramienta[])=>{
      this.herramientas = data;
      this.herramienta = this.herramientas.find((m)=>{ return m.id == this.id });
        console.log(this.herramienta);  
      }, (error)=>{
          console.log(error);
        });
   }

   saveHerramienta(){
    let v = this.valor + this.herramienta.cantidad;
    console.log(v);
    this.herramienta.cantidad  = v 
    this.herramientaService.put(this.herramienta).subscribe((data)=>{
      this.herramienta
      alert('Herramienta Actualizada');
      this.router.navigate(['/herramienta']);
      
    }, (error) => {
      console.log(error);
      alert('Error al guardar datos');      
    });
  }  
  

  ngOnInit() {
  }

}
