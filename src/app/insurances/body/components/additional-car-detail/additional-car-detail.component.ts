import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { BodyFacade } from '../../+state/body.facade';
import { BodyService } from '../../shared/body.service';

@Component({
  selector: 'app-additional-car-detail',
  templateUrl: './additional-car-detail.component.html',
  styleUrls: ['./additional-car-detail.component.scss'],
})
export class AdditionalCarDetailComponent implements OnInit {
  form: FormGroup;
  plaqueOptions;

  constructor(
    private fb: FormBuilder,
    private bodyFacade: BodyFacade,
    private bodyService: BodyService
  ) {
    this.form = this.fb.group({
      color_id: '',
      plaque_left_no: '',
      plaque_right_no: '',
      plaque_middle_char_id: '',
      plaque_serial: '',
      motor_no: '',
      vin: '',
      chasis_no: '',
    });
    this.plaqueOptions = this.bodyService.getPlaqueOptions();
  }

  ngOnInit(): void {
    this.updateForm();
  }

  submit() {
    this.bodyFacade.updateVehicleAddDetail(this.form.value);
    this.bodyFacade.nextFlow();
  }

  prevFlow() {
    this.bodyFacade.prevFlow();
  }

  updateForm() {
    firstValueFrom(this.bodyFacade.selectedVehicle$).then((value) => {
      const data = value.additionalInfo;
      if (data) this.form.setValue(data);
    });
  }
}
