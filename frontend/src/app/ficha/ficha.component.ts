import { Component, OnInit } from '@angular/core';
import { FichaTecnica } from '../interfaces/clases';
import { FichaService } from '../services/ficha.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  fichas: FichaTecnica[] = [];
  constructor( private httpClient:HttpClient, private fichaService:FichaService) { 
    this.getFichas();
  }

  getFichas(){
    this.fichaService.get().subscribe((data: FichaTecnica[])=>{
      this.fichas = data;
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un error al cargar datos');
    });
  };
  ngOnInit() {

  }

}
