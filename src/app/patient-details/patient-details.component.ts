import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { patients } from '../patients';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
patient;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.patient = patients[+params.get('patientId')];
  });
  }

}