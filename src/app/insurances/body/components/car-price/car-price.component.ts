import { Component, OnInit } from '@angular/core';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-car-price',
  templateUrl: './car-price.component.html',
  styleUrls: ['./car-price.component.scss'],
})
export class CarPriceComponent implements OnInit {
  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {}

  prevFlow() {
    this.bodyFacade.prevFlow();
  }

  nextFlow() {
    this.bodyFacade.nextFlow();
  }
}
