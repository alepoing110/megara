import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService { 
 
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/equipo');
  }
  
  save(equipo: Equipo){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/equipo', equipo, {headers: headers});  
  }

  put(equipo){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/equipo/' + equipo.id, equipo, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/equipo/' + id);
  }
}


