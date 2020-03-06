import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientService } from './patient.service';
import { SmileCareComponent } from './smile-care/smile-care.component';

@NgModule({
    imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
       { path: 'patient/:patientId', component: PatientDetailsComponent },
       { path: 'smileCare', component: SmileCareComponent }
    ])
  ],
  declarations: [ AppComponent,  TopBarComponent, LoginComponent, PatientDetailsComponent, SmileCareComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PatientService]
})
export class AppModule { }
