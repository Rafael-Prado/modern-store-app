import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serviceUrl: string = 'http://localhost:1771/';
 
  constructor(private http: Http) { }

  CreateUser(data: any){
    return this.http
    .post(this.serviceUrl + 'v1/customers', data)
    .pipe(map(response => response.json()));  
  }
}
