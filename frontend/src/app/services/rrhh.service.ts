import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RrHh } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class RrhhService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 
  
  get(){
    
    return this.httpClient.get(this.API_ENDPOINT + '/recurso');
  }
  save(recursos: RrHh){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/recurso', recursos, {headers: headers});  
  }

  put(recursos){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/recurso/' + recursos.id, recursos, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/recurso/' + id);
  }
}





