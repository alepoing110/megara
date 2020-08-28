import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo, Equipo, Insumo, Herramienta, RrHh, GrupoTrabajoCompleto, GrupoTrabajo, Proveedor, DetalleCompleto, Detalle, Material } from '../interfaces/clases';
import { ActivatedRoute, Router } from '@angular/router';
import { OtService } from '../services/ot.service';
import { EquipoService } from '../services/equipo.service';
import { HerramientaService } from '../services/herramienta.service';
import { InsumoService } from '../services/insumo.service';
import { RrhhService } from '../services/rrhh.service';
import { ProveedorService } from '../services/proveedor.service';
import { MaterialService } from '../services/material.service';
import { GrupoTrabajoService } from '../services/grupo-trabajo.service';

@Component({
  selector: 'app-editar-ot',
  templateUrl: './editar-ot.component.html',
  styleUrls: ['./editar-ot.component.scss']
})
export class EditarOtComponent implements OnInit {
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

  equipos: Equipo[];
  proveedores: Proveedor[] = [];
  herramientas: Herramienta[] = [];
  insumos: Insumo[]= [];
  detalleCompleto: DetalleCompleto[] = [];
  detalles: Detalle[] = [];
  insumo: Insumo;
  proveedor: Proveedor;
  herramienta: Herramienta;  
  equipo: Equipo;

  cantidad_equipo: number = 0;
  cantidad_herramienta: number = 0;
  cantidad_insumo:number = 0;


  ides: OrdenTrabajo[]=[];
  ultimo_id = 0;

  id: any;
  editing: boolean = false;
  ordenes: OrdenTrabajo[];

  rrhhs: RrHh[];
  rrhh: RrHh;
  lista: GrupoTrabajoCompleto[] = [];
  lista_equipo: Equipo[] = [];
  grupo: GrupoTrabajo = {
    orden_trabajo_id: null,
    personal_id: null
  }
  grupos: GrupoTrabajo[] = [];

  materiales: Material[] = [];
  valor_agregado: number = 0;

  id_orden: number;
  id_personal: number;

  
  
  constructor(private ordenService: OtService, private equipoService:EquipoService ,
            private insumoService:InsumoService, private herramientaService:HerramientaService,
             activatedRoute: ActivatedRoute,private router: Router,
             private rrhhService: RrhhService, private proveedorService: ProveedorService, 
             private materialService: MaterialService, private grupoService:GrupoTrabajoService) {
    this.id = activatedRoute.snapshot.params['id'];
      if(this.id){
        this.editing = true;
        this.ordenService.get().subscribe((data: OrdenTrabajo[])=>{
        
        this.ordenes = data;
        this.orden = this.ordenes.find((m)=>{ return m.id == this.id });
        //console.log(this.orden);  
      }, (error)=>{
          console.log(error);
        });
      }else{
        this.editing = false;
      }
   }

   getPersonal(){
    this.rrhhService.get().subscribe((data: RrHh[])=>{
      this.rrhhs = data;
      ///console.log(this.rrhhs);           
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }
  
  agregarRrhh(){    
    this.id_personal = this.rrhh.id;
    this.lista.push(new GrupoTrabajoCompleto(this.id_personal,this.ultimo_id,this.rrhh.nombre,
                                            this.rrhh.ap_paterno,this.rrhh.ap_materno));

    this.grupos.push(new GrupoTrabajo(this.id_personal,this.ultimo_id));

  }
  deleteRrhh(){    
    this.lista.pop();
    this.grupos.pop();;
    
  }

   saveOrden(){
    
    if(this.editing){
      this.ordenService.put(this.orden).subscribe((data)=>{
        alert('Orden Actualizado');
        this.router.navigate(['/orden']);
        console.log(data);
        
      }, (error) => {
        console.log(error);
        alert('Error al guardar datos');      
      });
    }else{
      for(let m of this.materiales){
        this.materialService.save(m);
      }
      for(let g of this.grupos){
        this.grupoService.save(g);
      }
      this.ordenService.save(this.orden).subscribe((data)=>{
        alert('Orden Generada');
        this.router.navigate(['/orden']);
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('error al guardar');      
      });
    }    

  }

  getOrden(){
    this.ordenService.get().subscribe((data: OrdenTrabajo[])=>{      
      this.ides = data;
      if(!this.editing)
        this.ultimo_id = (this.ides.length)+1;
      else
        this.ultimo_id = this.id;
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  getEquipos(){
    this.equipoService.get().subscribe((data: Equipo[])=>{
      this.equipos = data;
      //console.log(this.equipos);     
      
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  };

  getHerramientas(){
    this.herramientaService.get().subscribe((data: Herramienta[])=>{
      this.herramientas = data;
      //console.log(this.herramientas);           
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  };

  getInsumos(){
    this.insumoService.get().subscribe((data: Insumo[])=>{
      this.insumos = data;
      //console.log(this.insumos);     
      
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  };

  getProveedores(){
    this.proveedorService.get().subscribe((data: Proveedor[])=>{      
      this.proveedores = data;
      //console.log(this.proveedores);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  }

  anadirHerramienta(){      
    if(this.herramienta.cantidad<this.cantidad_herramienta)
      alert('la canditad de herramientas es menor')
    else{
      
      this.detalleCompleto.push(new DetalleCompleto((this.herramienta.precio*this.cantidad_herramienta),this.cantidad_herramienta,
      this.ultimo_id,null,null,this.herramienta.nombre,this.herramienta.id,null));
      this.materiales.push(new Material(this.ultimo_id,this.herramienta.cantidad,null,this.herramienta.id,null));
      
      this.disminuirCantidad("herramienta", this.cantidad_herramienta);      
      this.valor_agregado = this.cantidad_herramienta;
      this.cantidad_herramienta = null;
    }
    //console.log(this.materiales)
  }

  anadirInsumo(){      
    if(this.insumo.cantidad<this.cantidad_insumo)
      alert('La cantidad de insumos es menor');
    else{
      this.detalleCompleto.push(new DetalleCompleto((this.insumo.precio*this.cantidad_insumo),this.cantidad_insumo,
      this.ultimo_id,null,this.insumo.nombre,null,null,this.insumo.id));
      this.materiales.push(new Material(this.ultimo_id,this.cantidad_insumo,this.insumo.id,null,null));
      
      this.disminuirCantidad("insumo",this.cantidad_insumo)
      this.valor_agregado = this.cantidad_insumo
      this.cantidad_insumo = null;
    }
    //console.log(this.materiales)
  }

  anadirEquipo(){     
      this.lista_equipo.push(this.equipo);
      this.materiales.push(new Material(this.ultimo_id,1,null,null,this.equipo.id));
  }

  deleteMaterial(){    
    if(this.materiales[this.materiales.length-1].herramienta_id){
      let v = this.herramienta.cantidad + this.valor_agregado
      this.herramienta.cantidad = v;
      this.herramientaService.put(this.herramienta).subscribe((data)=>{                
      }, (error) => {
        alert('Error al actualiar insumo');      
      });
    }
    if(this.materiales[this.materiales.length-1].insumo_id){
      let v = this.insumo.cantidad + this.valor_agregado;
      //console.log('Valor de insumo'+v);
      this.insumo.cantidad  = v 
      this.insumoService.put(this.insumo).subscribe((data)=>{        
        
      }, (error) => {
        console.log(error);
        alert('Error al disminuir insumos');      
      });
    }
    this.detalleCompleto.pop()
    this.materiales.pop();
  }

  deleteEquipo(){
    this.lista_equipo.pop();
    this.materiales.pop();
  }


  disminuirCantidad(tipo: string, valor: number){    
    console.log(valor)
    if(tipo == "insumo"){
      let v = this.insumo.cantidad - valor;
      //console.log('Valor de insumo'+v);
      this.insumo.cantidad  = v 
      this.insumoService.put(this.insumo).subscribe((data)=>{        
        
      }, (error) => {
        console.log(error);
        alert('Error al disminuir insumos');      
      });
    }
    if(tipo == "herramienta"){
      let v = this.herramienta.cantidad - valor;
      //console.log('Valor de herramienta'+v);
      this.herramienta.cantidad  = v 
      this.herramientaService.put(this.herramienta).subscribe((data)=>{        
        
      }, (error) => {
        console.log(error);
        alert('Error al disminuir insumos');      
      });
    }
  }  

  ngOnInit() {
    this.getEquipos();
    this.getOrden();
    this.getHerramientas();
    this.getInsumos();
    this.getPersonal();
    this.getProveedores();
  }

}
