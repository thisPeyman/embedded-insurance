import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-additional-car-detail',
  templateUrl: './additional-car-detail.component.html',
  styleUrls: ['./additional-car-detail.component.scss'],
})
export class AdditionalCarDetailComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private bodyFacade: BodyFacade) {
    this.form = this.fb.group({
      color_id: '',
      plaque_left_no: '',
      plaque_middle_char_id: '',
      plaque_serial: '',
      motor_no: '',
      vin: '',
      chasis_no: '',
    });
  }

  ngOnInit(): void {}

  submit() {
    this.bodyFacade.nextFlow();
  }

  prevFlow() {
    this.bodyFacade.prevFlow();
  }
}
