import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  patient;
addPatientDetails(patient){
this.patient.push(patient);
}

getPatientDetails(){
  return this.patient;
}
  constructor() { }

}