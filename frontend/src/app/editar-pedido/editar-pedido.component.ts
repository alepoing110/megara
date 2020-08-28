import { Component, OnInit } from '@angular/core';
import { Pedido, Detalle, Proveedor, Herramienta, Insumo, DetalleCompleto } from '../interfaces/clases';
import { Usuario } from '../interfaces/clases';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../services/pedido.service';
import { UsuarioService } from '../services/usuario.service';
import { DetalleService } from '../services/detalle.service';
import { ProveedorService } from '../services/proveedor.service';
import { HerramientaService } from '../services/herramienta.service';
import { InsumoService } from '../services/insumo.service';
import * as jsPDF from 'jspdf';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.scss']
})

export class EditarPedidoComponent implements OnInit {
  
  proveedores: Proveedor[] = [];
  herramientas: Herramienta[] = [];
  insumos: Insumo[]= [];
  detalleCompleto: DetalleCompleto[] = [];
  detalles: Detalle[] = [];
  insumo: Insumo;
  proveedor: Proveedor;
  herramienta: Herramienta;  
  cantidad_herramienta: number;
  cantidad_insumo:number;
  nombre_pedido: string;

  pedido: Pedido = {
      id: null,
      fecha: null,
      total: null,    
      usuario_ci: null
    };

    

    ides: Pedido[]=[];
    ultimo_id = 0;  

    mes: number = (new Date().getMonth())+1;
    fechaMin = ''+(new Date().getFullYear().valueOf())+'-'+this.mes+'-'+(new Date().getDate());
  
    id: any;
    editing: boolean = false;
    pedidos: Pedido[];
    usuarios: Usuario[] = [];

    encargados: Usuario[]=[];

    constructor(private pedidoService: PedidoService, private detalleService: DetalleService, 
      private proveedorService: ProveedorService, private usuariosService: UsuarioService, 
      private herramientaService: HerramientaService, private insumoService: InsumoService,
      activatedRoute: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {

      this.getInsumos();
      this.getHerramientas();
      this.getUsuarios();  

      this.id = activatedRoute.snapshot.params['id'];

      //console.log(this.fechaMin);
      if(this.id){
        this.editing = true;
        this.pedidoService.get().subscribe((data: Pedido[])=>{        
        this.pedidos = data;
        this.pedido = this.pedidos.find((m)=>{ return m.id == this.id });
        //console.log(this.pedido);                    
      }, (error)=>{
          console.log(error);
        });

        this.detalleService.get().subscribe((data: Detalle[])=>{        
          this.detalles = data;  
          let nom_h:string = null
          let nom_i:string = null
          for(let d of this.detalles){
            nom_h = null;
            nom_i = null;
            if(d.pedido_id == this.id){
              if(d.herramienta_id){                
                for(let h of this.herramientas){
                  if(h.id == d.herramienta_id){
                    nom_h = h.nombre
                    //console.log(nom_h)
                  }
                }
              }
              else{                
                for(let i of this.insumos){
                  
                  if(i.id == d.insumo_id){
                    nom_i = i.nombre
                    //console.log(nom_i)
                  }
                }
              }
              this.detalleCompleto.push(new DetalleCompleto(d.precio,d.cantidad,d.pedido_id,d.proveedor_id,
                nom_i,nom_h,d.herramienta_id,d.insumo_id));
            }
           
          }
          //console.log(this.detalles);                    
        }, (error)=>{
            console.log(error);
          });
      }else{
        this.editing = false;
      }
     }

    getIdDetalle(){
      this.pedidoService.get().subscribe((data: Pedido[])=>{      
        this.ides = data;
        if(!this.editing)
          this.ultimo_id = (this.ides.length)+1;
        else
          this.ultimo_id = this.id;
        //console.log(this.ides)
      },
      (error)=>{
        console.log(error);
        alert('Ocurrio un error al cargar datos');
      });
    }

    getUsuarios(){
      this.usuariosService.get().subscribe((data: Usuario[])=>{        
        this.usuarios = data;      
        for (let num of data) {
          if(num.rol==3||num.rol==1){
            this.encargados.push(num);            
          }          
        }                      
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

    getHerramientas(){
      this.herramientaService.get().subscribe((data: Herramienta[])=>{      
        this.herramientas = data;
        //console.log(this.herramientas);
        
      },
      (error)=>{
        console.log(error);
        alert('Ocurrio un error al cargar datos');
      });
    }

    getInsumos(){
      this.insumoService.get().subscribe((data: Insumo[])=>{      
        this.insumos = data;
        //console.log(this.insumos);
      },
      (error)=>{
        console.log(error);
        alert('Ocurrio un error al cargar datos');
      });
    }

    guardarTodo(){ 
      if(!this.editing){    

        for(let d of this.detalles){
          this.detalleService.save(d).subscribe((data)=>{
            
          }, (error)=>{
            alert('Error al guardar detalle')
          
          });
        }

        for(let u of this.usuarios){            
          if(u.ci == this.pedido.usuario_ci){          
            this.nombre_pedido = u.nombre +' ' + u.ap_paterno + ' ' + u.ap_materno;
            
          }
        }
        
        this.pedidoService.save(this.pedido).subscribe((data)=>{
          //alert('Pedido guardado correctamente')
          
          
        }, (error) => {
          console.log(error);
          alert('Error al guardar pedido');      
        });
      }
      console.log(this.nombre_pedido)
      var doc = new jsPDF()
      doc.setFontSize(20)
      doc.text('LISTA DE PEDIDO', 75, 15);
      doc.setFontSize(15)
      doc.text('ID PEDIDO: ' + this.ultimo_id,10 , 25);
      doc.text('NOMBRE: ' + this.nombre_pedido,45,25);
      doc.text('C.I.: ' + this.pedido.usuario_ci, 150, 25);
      doc.line(10, 30, 200, 30);
      doc.setFontSize(11)
      doc.setFont('helvetica')
      doc.setFontType('bold')
      doc.text(10, 35, 'ID I.')
      doc.text(20, 35, 'ID H.')
      doc.text(35, 35, 'ID PROV.')
      doc.text(60, 35, 'NOMBRE I.')
      doc.text(100, 35, 'NOMBRE H.')
      doc.text(140, 35, 'CANT.')
      doc.text(170, 35, 'PRECIO')
      doc.setFontSize(10)
      doc.setFontType('normal')
      var i = 5;
    for(let g of this.detalleCompleto){      
      doc.text(10, 35+i,'' + g.insumo_id )
      doc.text(20, 35+i,'' + g.herramienta_id)
      doc.text(35, 35+i,'' + g.proveedor_id)
      doc.text(60, 35+i,'' + g.insumo_nombre)
      doc.text(100, 35+i,'' + g.herramienta_nombre)
      doc.text(140, 35+i,'' + g.cantidad)
      doc.text(170, 35+i,'' + g.precio)
      
      i += 5;
    }
    doc.setFontStyle('bold')
    doc.text(140,35+i,'TOTAL') 
    doc.text(170,35+i,''+this.pedido.total)
    doc.autoPrint();
    doc.output('dataurlnewwindow', {filename: 'grupos.pdf'});
      
    }

    anadirHerramienta(){      
      if(this.proveedor==null)
        alert('Seleccione un proveedor')
      else{
        this.detalleCompleto.push(new DetalleCompleto((this.herramienta.precio*this.cantidad_herramienta),this.cantidad_herramienta,
        this.ultimo_id,this.proveedor.id,null,this.herramienta.nombre,this.herramienta.id,null));
        this.detalles.push(new Detalle((this.herramienta.precio*this.cantidad_herramienta),this.cantidad_herramienta,
        this.ultimo_id,this.proveedor.id,this.herramienta.id,null));
        //console.log(this.detalleCompleto);
        this.cantidad_herramienta = null;
        var sum=0;
        for(let d of this.detalleCompleto){
          sum += d.precio; 
        }
        this.pedido.total = sum;
      }
    }

    anadirInsumo(){      
      if(this.proveedor==null)
        alert('Seleccione un proveedor')
      else{
        this.detalleCompleto.push(new DetalleCompleto((this.insumo.precio*this.cantidad_insumo),this.cantidad_insumo,
        this.ultimo_id,this.proveedor.id,this.insumo.nombre,null,null,this.insumo.id));
        this.detalles.push(new Detalle((this.insumo.precio*this.cantidad_insumo),this.cantidad_insumo,
        this.ultimo_id,this.proveedor.id,null,this.insumo.id));      
        //console.log(this.detalleCompleto);
        this.cantidad_insumo = null;
        var sum=0;
        for(let d of this.detalleCompleto){
          sum += d.precio; 
        }
        this.pedido.total = sum;
      }
    }
  
    ngOnInit() {   
      this.getIdDetalle();      
      this.getProveedores();
    }

    

  }
  
