import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentData } from './payment-success.resolver';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent implements OnInit {
  data: PaymentData;

  constructor(private route: ActivatedRoute) {
    this.data = route.snapshot.data['data'];
  }

  ngOnInit(): void {}
}
