import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicineModalComponent } from '../CustomControls/medicine-modal/medicine-modal.component';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor() { }

  @ViewChild('medicineModalComponent', {static: true}) medicineModalComponent: MedicineModalComponent;

  ngOnInit(): void {
  }



  onAddMedicineBtnClicked(event_data){
    this.medicineModalComponent.showMedicineDialog();
  }


}
