
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: any[] = [];
  cartChange: Observable<any>;
  cartChangeObserver: Observer<any>;
  constructor() { 
    this.cartChange = new Observable((observer: Observer<any>) =>{
      this.cartChangeObserver = observer;
    });
  }

  addItem(item){
    this.items.push(item);
    this.cartChangeObserver.next(this.items);
  }
}
