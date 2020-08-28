import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Pedido } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
 
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { } 

  get(){
    
    return this.httpClient.get(this.API_ENDPOINT + '/pedido');
  }
  save(pedido: Pedido){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/pedido', pedido, {headers: headers});  
  }

  put(pedido){
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.API_ENDPOINT + '/pedido/' + pedido.id, pedido, {headers: headers});  
  }
  
  delete(id){
    
    return this.httpClient.delete(this.API_ENDPOINT + '/pedido/' + id);
  }
}
