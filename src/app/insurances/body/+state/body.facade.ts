import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as BodySelectors from './body.selector';
import * as BodyActions from './body.action';
import {
  AdditionalInfo,
  InsuranceHistory,
  SelectedVehicle,
} from '../shared/SelectedVehicle';
import { Customer } from '../shared/Customer';

@Injectable()
export class BodyFacade {
  flowStep$ = this.store.select(BodySelectors.selectFlowStep);
  brands$ = this.store.select(BodySelectors.selectVehicleBrands);
  models$ = this.store.select(BodySelectors.selectVehicleModels);
  selectedVehicle$ = this.store.select(BodySelectors.selectSelectedVehicle);
  priceInquiry$ = this.store.select(BodySelectors.selectPriceInquiry);
  fullbodyOptions$ = this.store.select(BodySelectors.selectFullbodyOptions);
  customerInfo$ = this.store.select(BodySelectors.selectCustomerInfo);

  // These are for http requests
  httpPriceInquiry$ = this.store.select(BodySelectors.selectInquiryReqBody);

  constructor(private store: Store) {}

  loadVehiclesData() {
    this.store.dispatch(BodyActions.loadVehicles());
  }

  updateSelectedVehicle(vehicle: Partial<SelectedVehicle>) {
    this.store.dispatch(BodyActions.updateVehicle({ vehicle }));
  }
  updateVehicleAddDetail(data: AdditionalInfo) {
    this.store.dispatch(BodyActions.updateVehicleAdditional({ data }));
  }
  updateVehicleHistory(data: InsuranceHistory) {
    this.store.dispatch(BodyActions.updateVehicleHistory({ data }));
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

  submitCustomer(customer: Partial<Customer>) {
    this.store.dispatch(BodyActions.submitCustomer({ customer }));
  }
}
