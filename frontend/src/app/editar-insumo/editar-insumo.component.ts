import { Component, OnInit } from '@angular/core';
import { Insumo } from '../interfaces/clases';
import { InsumoService } from '../services/insumo.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-editar-insumo',
  templateUrl: './editar-insumo.component.html',
  styleUrls: ['./editar-insumo.component.scss']
})
export class EditarInsumoComponent implements OnInit {
  insumo: Insumo = {
    id: null,
    nombre: null,
    cantidad: null,    
    precio: null, 
  };


  id: any;
  editing: boolean = false;
  insumos: Insumo[];

  constructor(private insumoService: InsumoService, activatedRoute: ActivatedRoute,private router: Router) {

    this.id = activatedRoute.snapshot.params['id'];
      if(this.id){
        this.editing = true;
        this.insumoService.get().subscribe((data: Insumo[])=>{
        
        this.insumos = data;
        this.insumo = this.insumos.find((m)=>{ return m.id == this.id });
        console.log(this.insumo);  
      }, (error)=>{
          console.log(error);
        });
      }else{
        this.editing = false;
      }
   }


   saveInsumo(){
      
    if(this.editing){
      this.insumoService.put(this.insumo).subscribe((data)=>{
        alert('Insumo Actualizado');
        this.router.navigate(['/insumo']);
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Error al guardar datos');      
      });
    }else{
      this.insumoService.save(this.insumo).subscribe((data)=>{
        alert('Insumo Guardado');
        this.router.navigate(['/insumo']);
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
