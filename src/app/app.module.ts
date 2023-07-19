import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MedicineModalComponent } from './CustomControls/medicine-modal/medicine-modal.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { FeedComponent } from './feed/feed.component';
import { HiddenPostUndoComponent } from './hidden-post-undo/hidden-post-undo.component';
import { IgnoredUserListComponent } from './ignored-user-list/ignored-user-list.component';
import { NotificationDesignComponent } from './notification-design/notification-design.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TimelineTrackComponent } from './timeline-track/timeline-track.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorAppointmentComponent,
    AppointmentListComponent,
    PatientDetailsComponent,
    PrescriptionComponent,
    MedicineModalComponent,
    EmailTemplateComponent,
    FeedComponent,
    HiddenPostUndoComponent,
    IgnoredUserListComponent,
    NotificationDesignComponent,
    SideNavBarComponent,
    TimelineTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
