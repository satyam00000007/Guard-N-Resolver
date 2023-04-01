import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    public route : Router,
    private formBuilder : FormBuilder,
  ) {

    this.loginForm = formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      checkout : [''],
    })


  }

  ngOnInit(): void {
  }

  login(){
    console.log(" login ");
    console.log(this.loginForm);

    sessionStorage.setItem('UserData',this.loginForm.value.email);
    // let UserData = localStorage.getItem('UserData');
    console.log(localStorage.getItem('UserData'));

    this.route.navigate(["dash"]);
  }

}
