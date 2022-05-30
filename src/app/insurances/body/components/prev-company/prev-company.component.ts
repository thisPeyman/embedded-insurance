import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { firstValueFrom, map, take } from 'rxjs';
import { BodyFacade } from '../../+state/body.facade';
import { BodyService } from '../../shared/body.service';

@Component({
  selector: 'app-prev-company',
  templateUrl: './prev-company.component.html',
  styleUrls: ['./prev-company.component.scss'],
})
export class PrevCompanyComponent implements OnInit {
  form;
  insuranceOptions;

  constructor(
    public bodyFacade: BodyFacade,
    private fb: FormBuilder,
    private bodyService: BodyService
  ) {
    this.form = this.fb.group({
      previous_policy_begin_date: '',
      previous_policy_end_date: '',
      previous_insurance_corp_id: '',
      previous_policy_no: '',
    });
    this.insuranceOptions = this.bodyService
      .getLookupDetails()
      .pipe(map((v) => v.insurance_copmanies));
  }

  ngOnInit() {
    this.checkPrevInsurance();
    this.updateForm();
  }

  submit() {
    this.bodyFacade.updateVehicleHistory(this.form.value);
    this.bodyFacade.nextFlow();
  }

  checkPrevInsurance() {
    firstValueFrom(this.bodyFacade.selectedVehicle$).then((v) => {
      if (!v.hasInsuranceHistory) this.bodyFacade.nextFlow();
    });
  }

  updateForm() {
    firstValueFrom(this.bodyFacade.selectedVehicle$).then((value) => {
      const data = value.insuranceHistory;
      if (data) this.form.setValue(data);
    });
  }
}
