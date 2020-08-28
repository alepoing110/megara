import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { OrdenTrabajo } from '../interfaces/clases';
 
@Injectable({
  providedIn: 'root'
})
export class OtService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/orden');
  }
  
  save(orden: OrdenTrabajo){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/orden', orden, {headers: headers});  
  }

  put(orden){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/orden/' + orden.id, orden, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/orden/' + id);
  }
}
