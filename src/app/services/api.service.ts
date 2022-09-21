import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${environment.baseUrl}/productos`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  showProduct(id: any){
    return this.http.post<any>(`${environment.baseUrl}/productos/show`, id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}