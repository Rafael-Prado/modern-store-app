import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { UI } from './../../utils/ui';
import { CustomValidator } from 'src/app/validators/custom.validator';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  providers:[UI, DataService]
})
export class SignupPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: UI, private dataService: DataService) { 
    this.form = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      document: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      userName: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      confirmpassword: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]   
    });
  }

  ngOnInit() {
  }

  submit(){    
    this.dataService.CreateUser(this.form.value).subscribe(result =>{
      console.log(result);
    }, error =>{
      console.log(error);
    });
  }

}
