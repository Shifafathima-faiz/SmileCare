import { Component, OnInit } from '@angular/core';
import { patients } from '../patients';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
patients=patients;
  constructor() { }

  ngOnInit() {
  }

}