import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html'
})
export class HeadbarComponent implements OnInit {

  public totalItems: number = 0;
  public user: string = '';

  constructor(private cartSevice: CartService, private router: Router) {
    this.cartSevice.cartChange.subscribe((data) =>{
      this.totalItems = length;
    });
    var data:any = JSON.parse(localStorage.getItem('mws.user'));
    if(data){
      this.user = data.name;
    }
   }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('mws.token');
    localStorage.removeItem('mws.user');
    this.router.navigateByUrl('/')
  }

}
