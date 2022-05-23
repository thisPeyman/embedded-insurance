import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom, Subscription, take } from 'rxjs';
import { BodyFacade } from '../../+state/body.facade';
import { SelectedVehicle } from '../../shared/SelectedVehicle';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  form: FormGroup;
  brands$ = this.bodyFacade.brands$;
  models$ = this.bodyFacade.models$;
  usages = ['شخصی', 'تاکسی درون شهری', 'تاکسی برون شهری'];
  // this will generate list of numbers between 1350 and 1401
  yearsList = Array.from(
    { length: 1401 - 1350 },
    (_, i) => 1350 + 1 + i
  ).reverse();

  constructor(private bodyFacade: BodyFacade, private fb: FormBuilder) {
    this.form = this.fb.group({
      brand: '',
      model: '',
      usage: '',
      builtYear: '',
    });
  }

  ngOnInit(): void {
    this.bodyFacade.loadVehiclesData();
    this.setFormValues();

    this.form.valueChanges.subscribe((v) => this.updateVehicle(v));
  }

  updateVehicle(vehicle: Partial<SelectedVehicle>) {
    this.bodyFacade.updateSelectedVehicle(vehicle);
  }

  nextFlow() {
    this.bodyFacade.nextFlow();
  }

  async setFormValues() {
    let formValue = await firstValueFrom(this.bodyFacade.selectedVehicle$);

    const { brand, model, usage, builtYear } = formValue;

    this.form.setValue({
      brand,
      model,
      usage,
      builtYear,
    });
  }
}
