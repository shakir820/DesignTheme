import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('f') searchForm: NgForm;

  onSearchSubmit(){

  }

  toggleDoctorListSort(event_data){

  }
}
