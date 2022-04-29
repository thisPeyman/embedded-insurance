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
  usages = ['شخصی', 'تاکسی درون شهری', 'تاکسی برون شهری'];

  // this will generate list of numbers between 1350 and 1401
  yearsList = Array.from({ length: 1401 - 1350 }, (_, i) =>
    String(1350 + 1 + i)
  ).reverse();
  selectedValue = null;

  constructor(public bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.loadVehiclesData();
  }

  brandChange(brand: string) {
    this.bodyFacade.updateSelectedVehicle({ brand });
  }
  modelChange(model: string) {
    this.bodyFacade.updateSelectedVehicle({ model });
  }
  usageChange(usage: string) {
    this.bodyFacade.updateSelectedVehicle({ usage });
  }
  builtYearChange(builtYear: string) {
    this.bodyFacade.updateSelectedVehicle({ builtYear: +builtYear });
  }
}
