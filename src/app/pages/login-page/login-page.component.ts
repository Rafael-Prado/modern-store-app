import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

import { SubMenuComponent } from './../../Componets/shared/sub-menu/sub-menu.component';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from './../../validators/custom.validator';
import { UI } from './../../utils/ui';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [UI, DataService]
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;  
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private ui: UI, private dataService: DataService, private router: Router) { 
    this.form = this.fb.group({
      UserName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
        //CustomValidator.EmailValidator
      ])],
      Password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
    this.checktoken();
  }

  checktoken(){
    var token = localStorage.getItem('mws.token');
    if (this.dataService.validateToken(token)) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() { 
  }


  showModal(){
    this.ui.setActive('modal');
  }

  hideModal(){
    this.ui.setInactive('modal');
  }

  submit(){
    this.dataService.authenticate(this.form.value)
    .subscribe(result => {
      localStorage.setItem('mws.token', result.token)
      localStorage.setItem('mws.user', JSON.stringify(result.user));
      this.router.navigateByUrl('/home')
    }, error => {
      this.errors = JSON.parse(error._body).errors;
    });
  }

}
