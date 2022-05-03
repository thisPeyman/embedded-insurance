import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as BodySelectors from './body.selector';
import * as BodyActions from './body.action';
import { SelectedVehicle } from '../shared/SelectedVehicle';

@Injectable()
export class BodyFacade {
  flowStep$ = this.store.select(BodySelectors.selectFlowStep);
  brands$ = this.store.select(BodySelectors.selectVehicleBrands);
  models$ = this.store.select(BodySelectors.selectVehicleModels);
  selectedVehicle$ = this.store.select(BodySelectors.selectSelectedVehicle);
  priceInquiry$ = this.store.select(BodySelectors.selectPriceInquiry);
  fullbodyOptions$ = this.store.select(BodySelectors.selectFullbodyOptions);

  // These are for http requests
  httpPriceInquiry$ = this.store.select(BodySelectors.selectInquiryReqBody);

  constructor(private store: Store) {}

  loadVehiclesData() {
    this.store.dispatch(BodyActions.loadVehicles());
  }

  updateSelectedVehicle(vehicle: Partial<SelectedVehicle>) {
    this.store.dispatch(BodyActions.updateVehicle({ vehicle }));
  }

  nextFlow() {
    this.store.dispatch(BodyActions.nextFlow());
  }
  prevFlow() {
    this.store.dispatch(BodyActions.prevFlow());
  }
  resetFlow() {
    this.store.dispatch(BodyActions.resetFlow());
  }

  inquiryPrice() {
    this.store.dispatch(BodyActions.inquiryPrice());
  }
  resetInquiry() {
    this.store.dispatch(BodyActions.resetPriceInquiry());
  }
}
