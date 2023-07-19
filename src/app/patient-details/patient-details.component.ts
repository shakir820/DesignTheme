import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.pets);
    var result = this.pets.reduce((acc, curr)=> {
      console.log('acc: ' + acc);
      console.log('curr: ' + curr);
      return acc;
    });

    console.log('result: ' + result);
  }




  pets = [
    {cat: 'cat', name: 'Pussy Cat'},
    {cat: 'cat', name: 'Tommy'},
    {cat: 'cat', name: 'Munny'},
    {cat: 'dog', name: 'Doggy'},
    {cat: 'dog', name: 'Suamn'},
    {cat: 'dog', name: 'Bluess'},
    {cat: 'dog', name: 'Poeees'},
    {cat: 'cow', name: 'Cookie'},
    {cat: 'cow', name: 'Ossusui'}
]



}
