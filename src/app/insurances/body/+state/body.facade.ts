import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as BodySelectors from './body.selector';
import * as BodyActions from './body.action';

@Injectable()
export class BodyFacade {
  flowStep$ = this.store.select(BodySelectors.selectFlowStep);
  brands$ = this.store.select(BodySelectors.selectVehicleBrands);
  models$ = this.store.select(BodySelectors.selectVehicleModels);
  selectedBrand$ = this.store.select(BodySelectors.selectSelectedBrand);
  selectedModel$ = this.store.select(BodySelectors.selectSelectedModel);

  constructor(private store: Store) {}

  loadVehiclesData() {
    this.store.dispatch(BodyActions.loadVehicles());
  }

  changeBrand(brand: string) {
    this.store.dispatch(BodyActions.changeBrand({ brand }));
  }
  changeModel(model: string) {
    this.store.dispatch(BodyActions.changeModel({ model }));
  }
  changeUsage(usage: string) {
    this.store.dispatch(BodyActions.changeUsage({ usage }));
  }
  changeBuiltYear(builtYear: number) {
    this.store.dispatch(BodyActions.changeBuiltYear({ builtYear }));
  }
}
