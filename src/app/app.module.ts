import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientService } from './patient.service';

@NgModule({
    imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
       { path: 'patient/:patientId', component: PatientDetailsComponent }
    ])
  ],
  declarations: [ AppComponent,  TopBarComponent, LoginComponent, PatientDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PatientService]
})
export class AppModule { }
