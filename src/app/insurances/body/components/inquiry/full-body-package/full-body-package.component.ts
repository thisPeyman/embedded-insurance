import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { skipWhile, take } from 'rxjs';
import { BodyFacade } from '../../../+state/body.facade';
import { FullbodyOptions } from '../../../shared/PriceInquiry';

@Component({
  selector: 'app-full-body-package',
  templateUrl: './full-body-package.component.html',
  styleUrls: ['./full-body-package.component.scss'],
})
export class FullBodyPackageComponent implements OnInit {
  fullbodyOptions!: FullbodyOptions[];
  fullbodyOptionsSelected: string[] = [];
  fullbodyPrice = 0;

  @Output() purchase = new EventEmitter();

  constructor(private bodyFacade: BodyFacade) {}

  submit() {
    let options = [...this.fullbodyOptionsSelected];
    options = options.filter((v) => v !== 'base_price');
    this.purchase.emit(options);
  }

  ngOnInit(): void {
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
}
