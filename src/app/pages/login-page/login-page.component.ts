import { Observable } from 'rxjs';

import { SubMenuComponent } from './../../Componets/shared/sub-menu/sub-menu.component';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from './../../validators/custom.validator';
import { UI } from './../../utils/ui';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [UI, DataService]
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: UI, private dataService: DataService) { 
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }


  ngOnInit() { 
    // console.log( this.dataService.getCustomer()
    // .subscribe(result =>{
    //   console.log(result);
    // }, error => {
    //    console.log(error);
    // }));
  }

  checkEmail(){
    this.ui.lock('usernameControl');
    setTimeout(() => {
      this.ui.unlock('usernameControl');
      console.log(this.form.controls['username'].value)
    }, 3000)
     
  }

  showModal(){
    this.ui.setActive('modal');
  }

  hideModal(){
    this.ui.setInactive('modal');
  }

  submit(){
    
  }

}
