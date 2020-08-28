import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Herramienta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/herramienta');
  }
  
  save(herramienta: Herramienta){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/herramienta', herramienta, {headers: headers});  
  }

  put(herramienta){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/herramienta/' + herramienta.id, herramienta, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/herramienta/' + id);
  }
}


