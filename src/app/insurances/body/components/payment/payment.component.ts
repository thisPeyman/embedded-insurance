import { Component, OnInit } from '@angular/core';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.issuance();
  }
}
