import { Component, OnInit } from '@angular/core';
import { RrHh, OrdenTrabajo, GrupoTrabajo, GrupoTrabajoCompleto } from '../interfaces/clases';
import * as jsPDF from 'jspdf';
import { ActivatedRoute, Router } from '@angular/router';
import { RrhhService } from '../services/rrhh.service';
import { GrupoTrabajoService } from '../services/grupo-trabajo.service';

@Component({
  selector: 'app-grupo-trabajo',
  templateUrl: './grupo-trabajo.component.html',
  styleUrls: ['./grupo-trabajo.component.scss']
})
export class GrupoTrabajoComponent implements OnInit {

  rrhhs: RrHh[];
  
  id_orden: number;
  id_personal: number;

  rrhh: RrHh ;
  lista: GrupoTrabajoCompleto[] = [];

  grupo: GrupoTrabajo = {
    orden_trabajo_id: null,
    personal_id: null
  }

  id_input: number = 0;
  editing: boolean = false;
  grupos: GrupoTrabajo[] = [];

  constructor(private grupoService: GrupoTrabajoService, private rrhhService: RrhhService, 
            activatedRoute: ActivatedRoute,private router: Router) {
    this.id_orden = activatedRoute.snapshot.params['id'];
    if(this.id_orden){
      this.editing = true;

      console.log(this.id_orden);  
    
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
    this.lista.push(new GrupoTrabajoCompleto(this.id_personal,this.id_orden,this.rrhh.nombre,
                                            this.rrhh.ap_paterno,this.rrhh.ap_materno));

    this.grupos.push(new GrupoTrabajo(this.id_personal,this.id_orden));

  }
  
  saveGrupo(){    
    for(let g of this.grupos){
      this.grupoService.save(g).subscribe((data)=>{
        //console.log(data);
      }, (error) => {
        console.log(error);
        alert('Error al guardar');      
      });
    }
    var doc = new jsPDF()
    doc.text('GRUPO DE TRABAJO GENERADO', 50, 10);
    doc.text('ID ORDEN TRABAJO: ' + this.id_orden, 65, 20);
    
    doc.line(10, 25, 195, 25);

    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.text(10, 35, 'ID')
    doc.text(20, 35, 'NOMBRE(S)')
    doc.text(70, 35, 'AP. PATERNO')
    doc.text(120, 35, 'AP. MATERNO')
    doc.setFontSize(11)
    var i = 5;
    for(let g of this.lista){      
      doc.text(10, 35+i,'' + g.personal_id )
      doc.text(20, 35+i,'' + g.nombre)
      doc.text(70, 35+i,'' + g.ap_paterno)
      doc.text(120, 35+i,'' + g.ap_materno)
      i += 5;
    }
    doc.autoPrint();
    doc.output('dataurlnewwindow', {filename: 'grupos.pdf'});
    
  }
  

  ngOnInit() {
    this.getPersonal();
  }

}
