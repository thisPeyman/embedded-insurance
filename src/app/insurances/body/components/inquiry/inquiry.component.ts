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

  fullbodyOptions!: FullbodyOptions[];
  fullbodyOptionsSelected: string[] = [];
  fullbodyPrice = 0;

  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.inquiryPrice();

    this.bodyFacade.fullbodyOptions$
      .pipe(
        skipWhile((v) => v === null),
        take(1)
      )
      .subscribe((opt) => {
        this.fullbodyOptions = opt!;
        this.fullbodyPrice = this.fullbodyOptions.find(
          (v) => v.key === 'base_price'
        )!.price;
      });
  }

  updateFullbody(options: string[]) {
    this.fullbodyOptionsSelected = options;
    this.fullbodyPrice = 0;

    options.forEach((option) => {
      let price = this.fullbodyOptions.find(
        (value) => value.key === option
      )?.price;

      if (price) this.fullbodyPrice += price;
    });
  }

  ngOnDestroy(): void {
    this.bodyFacade.resetInquiry();
  }
}
