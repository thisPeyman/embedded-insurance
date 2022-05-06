import { Component, OnDestroy, OnInit } from '@angular/core';
import { skipWhile, take, tap } from 'rxjs';
import { FullbodyOptions } from '../../shared/PriceInquiry';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent implements OnInit, OnDestroy {
  basePrices$ = this.bodyFacade.priceInquiry$;

  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.inquiryPrice();
  }

  purchase() {
    this.bodyFacade.nextFlow();
  }

  ngOnDestroy(): void {
    this.bodyFacade.resetInquiry();
  }
}
