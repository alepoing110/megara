import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/usuario');
  }
  
  save(usuario){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/usuario', usuario, {headers: headers});  
  }

  put(usuario){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/usuario/' + usuario.ci, usuario, {headers: headers});  
  }
  
  delete(ci){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/usuario/' + ci);
  }
}


