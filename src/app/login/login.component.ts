import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm;
  constructor(private formBuilder: FormBuilder) {

    this.loginForm=this.formBuilder.group({
      userName: '',
      password: ''
    });
   }

  ngOnInit() {
  }
  onSubmit(userData) {
    // Process checkout data here
    this.loginForm.reset();

    console.warn('You have succesfully logged In', userData);
  }

}