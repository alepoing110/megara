import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Proveedor } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
 
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    
    return this.httpClient.get(this.API_ENDPOINT + '/proveedor');
  }
  save(proveedor: Proveedor){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/proveedor', proveedor, {headers: headers});  
  }

  put(proveedor){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/proveedor/' + proveedor.id, proveedor, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/proveedor/' + id);
  }
}
