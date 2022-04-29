import { Component, OnInit } from '@angular/core';
import { BodyFacade } from '../+state/body.facade';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  brands$ = this.bodyFacade.brands$;
  models$ = this.bodyFacade.models$;
  selectedValue = null;

  constructor(public bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.loadVehiclesData();
  }

  brandChange(brand: string) {
    this.bodyFacade.changeBrand(brand);
  }

  modelChange(model: string) {
    this.bodyFacade.changeModel(model);
  }
}
