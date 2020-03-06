import { Component, OnInit } from '@angular/core';
import { patients } from '../patients';

@Component({
  selector: 'app-smile-care',
  templateUrl: './smile-care.component.html',
  styleUrls: ['./smile-care.component.css']
})
export class SmileCareComponent implements OnInit {
patients=patients;
  constructor() { }

  ngOnInit() {
  }

}