import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Detalle } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
 
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    
    return this.httpClient.get(this.API_ENDPOINT + '/detalle');
  }
  save(detalle: Detalle){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/detalle', detalle, {headers: headers});  
  }

  put(detalle){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/detalle/' + detalle.id, detalle, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/detalle/' + id);
  }
}