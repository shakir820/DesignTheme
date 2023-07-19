import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-medicine-modal',
  templateUrl: './medicine-modal.component.html',
  styleUrls: ['./medicine-modal.component.css']
})
export class MedicineModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



 showMedicineDialog(){

    var gg =  <HTMLButtonElement>document.getElementById('toggleMedicineModalBtn');
    gg.click();

    console.log('Medicine dialog btn clicked');
  }


}
