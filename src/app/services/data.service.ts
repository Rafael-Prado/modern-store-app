import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  constructor(private http: Http) { }

  getCustomer(){
    let customer: any = []
    return this.http
    .get('http://localhost:1771/v1/products')
    .pipe(map(response => response.json()));  
  }
}
