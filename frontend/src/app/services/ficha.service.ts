import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FichaTecnica } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class FichaService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/ficha');
  }
  
  save(ficha: FichaTecnica){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/ficha', ficha, {headers: headers});  
  }

  put(ficha){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/ficha/' + ficha.id, ficha, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/ficha/' + id);
  }
}
