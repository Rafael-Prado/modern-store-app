import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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

  authenticate(data: any){
    var dt = "grant_type=password&username=" + data.UserName + "&password=" + data.Password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serviceUrl + 'v1/authenticate',dt, options)
    .pipe(map((res: Response) => res.json()));
  }

  validateToken(token: string){
    if (token || token != '') {
      return false;
    }
    return true;
  }
}
