import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from '../interfaces/clases'

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/material');
  }

  save(material: Material){

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/material', material, {headers: headers});  
  }

}
