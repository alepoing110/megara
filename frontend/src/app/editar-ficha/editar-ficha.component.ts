import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo, FichaTecnica } from '../interfaces/clases';
import { OtService } from '../services/ot.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaService } from '../services/ficha.service';


@Component({
  selector: 'app-editar-ficha',
  templateUrl: './editar-ficha.component.html',
  styleUrls: ['./editar-ficha.component.scss']
})
export class EditarFichaComponent implements OnInit {

  orden: OrdenTrabajo = {
    fecha: null,
    descripcion: null,
    nom_supervisor_empresa: null,
    nom_empresa: null,
    equipo_id: null,
    equipo_empresa: null,
    marca_empresa: null,
    modelo_empresa: null,            
    procedencia_empresa: null,
    procedencia_ano_empresa: null,
    instalado_por_empresa: null,
    instalado_por_ano_empresa: null,
    ubicacion_tecnica_empresa: null,
    num_inventario_empresa: null,
    funcion_empresa: null,
    tipo_empresa: null,
    serie_empresa: null,
    fecha_inicio: null,
    id: null
};

  ordenTrabajo_id: number;
  ordenes: OrdenTrabajo[];

  fichas: FichaTecnica [] = [];
  ficha: FichaTecnica = {
    fecha_culminacion: null,
    orden_trabajo_id: null,
    recurso_humano_id: null,
    tiempo_mantenimiento: null,
    id: null
  }

  id: any;
  editing: boolean = false;

  constructor(private otService: OtService,
              private fichaService: FichaService, private httpClient:HttpClient,
              activatedRoute: ActivatedRoute,private router: Router) { 
    this.id = activatedRoute.snapshot.params['id'];
    if(this.id){  
      this.editing = true;
      this.fichaService.get().subscribe((data: FichaTecnica[])=>{
      this.fichas = data;
      this.ficha = this.fichas.find((m)=>{return m.id == this.id});
      },(error)=>{
        alert('Error en el ID');
      });

      this.otService.get().subscribe((data: OrdenTrabajo[])=>{      
        this.ordenes = data;
        this.orden = this.ordenes.find((m)=>{ return m.id == this.ficha.orden_trabajo_id });      
        if(this.ordenTrabajo_id!=null)
          alert('Datos cargados correctamente');    
      }, (error)=>{
        alert('Error al cargar los datos');    
        });
    }
    else
      this.editing = false;
  }
  
  sacarOtId(){
    
  }

  saveFicha(){    
    
  }

  imprimir(){

  }
  ngOnInit() {
    
  }

}
