import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { EmailTemplateComponent } from "./email-template/email-template.component";
import { FeedComponent } from "./feed/feed.component";
import { IgnoredUserListComponent } from "./ignored-user-list/ignored-user-list.component";
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { SideNavBarComponent } from "./side-nav-bar/side-nav-bar.component";
import { TimelineTrackComponent } from "./timeline-track/timeline-track.component";


export const appRoutes: Routes = [
  { path: '', component: TimelineTrackComponent },
  { path: 'DoctorAppointment', component: DoctorAppointmentComponent }
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
