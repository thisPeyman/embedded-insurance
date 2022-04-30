import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { BodyFacade } from '../../+state/body.facade';
import { SelectedVehicle } from '../../shared/SelectedVehicle';

@Component({
  selector: 'app-car-price',
  templateUrl: './car-price.component.html',
  styleUrls: ['./car-price.component.scss'],
})
export class CarPriceComponent implements OnInit {
  form: FormGroup;
  discountYears = [1, 2, 3, 4, 5, 6, 7, 8];

  get hasHistory(): boolean {
    return this.form.value.hasInsuranceHistory;
  }

  constructor(private bodyFacade: BodyFacade, private fb: FormBuilder) {
    this.form = this.fb.group({
      price: '',
      hasInsuranceHistory: false,
      isBrandNew: false,
      mainDiscountYears: '',
      sideDiscountYears: '',
    });
  }

  ngOnInit(): void {
    this.setFormValues();
  }

  prevFlow() {
    this.bodyFacade.prevFlow();
  }

  nextFlow() {
    this.bodyFacade.updateSelectedVehicle(this.form.value);
    this.bodyFacade.nextFlow();
  }

  setFormValues() {
    let formValue: Partial<SelectedVehicle> = {};

    this.bodyFacade.selectedVehicle$
      .pipe(take(1))
      .subscribe((v) => (formValue = v));

    const {
      price,
      hasInsuranceHistory,
      isBrandNew,
      mainDiscountYears,
      sideDiscountYears,
    } = formValue;

    this.form.setValue({
      price,
      hasInsuranceHistory,
      isBrandNew,
      mainDiscountYears,
      sideDiscountYears,
    });
  }
}
