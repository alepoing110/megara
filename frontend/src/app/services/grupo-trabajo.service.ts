import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrupoTrabajo } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class GrupoTrabajoService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/grupo');
  }
  
  save(grupo: GrupoTrabajo){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/grupo', grupo, {headers: headers});  
  }

  put(grupo){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/grupo/' + grupo.id, grupo, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/grupo/' + id);
  }
}
