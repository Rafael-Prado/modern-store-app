import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html'
})
export class HeadbarComponent implements OnInit {

  public totalItems: number = 0;

  constructor(private cartSevice: CartService) {
    this.cartSevice.cartChange.subscribe((data) =>{
      this.totalItems = length;
    });
   }

  ngOnInit() {
  }

}
