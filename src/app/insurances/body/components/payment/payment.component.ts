import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BodyFacade } from '../../+state/body.facade';
import { BodyService } from '../../shared/body.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  paymentLink?: string;

  constructor(
    private bodyFacade: BodyFacade,
    private bodyService: BodyService
  ) {}

  ngOnInit(): void {
    this.bodyFacade.issuance();

    this.bodyService.getPaymentLink(0).subscribe((value) => {
      this.paymentLink = value.payment_url;
    });
  }
}
