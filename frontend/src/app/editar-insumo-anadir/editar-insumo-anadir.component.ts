import { Component, OnInit } from '@angular/core';
import { Insumo } from '../interfaces/clases';
import { InsumoService } from '../services/insumo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-insumo-anadir',
  templateUrl: './editar-insumo-anadir.component.html',
  styleUrls: ['./editar-insumo-anadir.component.scss']
})
export class EditarInsumoAnadirComponent implements OnInit {
  valor: number = 0;
  insumo: Insumo = {
    id: null,
    nombre: null,
    cantidad: null,    
    precio: null, 
  };


  id: any;

  insumos: Insumo[];

  constructor(private insumoService: InsumoService, activatedRoute: ActivatedRoute,private router: Router) {

    this.id = activatedRoute.snapshot.params['id'];
      this.insumoService.get().subscribe((data: Insumo[])=>{
      this.insumos = data;
      this.insumo = this.insumos.find((m)=>{ return m.id == this.id });
        console.log(this.insumo);  
      }, (error)=>{
          console.log(error);
        });
    }
   

   saveInsumo(){    
    
    let v = this.valor + this.insumo.cantidad;
    console.log(v);
    this.insumo.cantidad  = v 
    this.insumoService.put(this.insumo).subscribe((data)=>{
      this.insumo
      alert('Insumo Actualizado');
      this.router.navigate(['/insumo']);
      
    }, (error) => {
      console.log(error);
      alert('Error al guardar datos');      
    });
  }  
  

  
  ngOnInit() {
  }

}
