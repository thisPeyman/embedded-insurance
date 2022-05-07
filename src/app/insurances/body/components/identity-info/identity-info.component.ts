import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-identity-info',
  templateUrl: './identity-info.component.html',
  styleUrls: ['./identity-info.component.scss'],
})
export class IdentityInfoComponent implements OnInit {
  form: FormGroup;
  months: { label: string; value: number }[] = [
    { label: 'فروردین', value: 1 },
    { label: 'اردیبهشت', value: 2 },
    { label: 'خرداد', value: 3 },
    { label: 'تیر', value: 4 },
    { label: 'مرداد', value: 5 },
    { label: 'شهریور', value: 6 },
    { label: 'مهر', value: 7 },
    { label: 'آبان', value: 8 },
    { label: 'آذر', value: 9 },
    { label: 'دی', value: 10 },
    { label: 'بهمن', value: 11 },
    { label: 'اسفند', value: 12 },
  ];

  constructor(private fb: FormBuilder, private bodyFacade: BodyFacade) {
    this.form = this.fb.group({
      national_code: '',
      mobile: '',
      birth_day: '',
      birth_month: '',
      birth_year: '',
      postal_code: '',
      address: '',
    });
  }

  ngOnInit(): void {}

  submit(): void {
    let formValue = { ...this.form.value };
    formValue.tel = formValue.mobile;
    formValue.city_id = 9131;

    this.bodyFacade.submitCustomer(formValue);
  }

  prevFlow() {
    this.bodyFacade.prevFlow();
  }
}
