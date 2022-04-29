import { createAction, createFeature, props } from '@ngrx/store';
import { Vehicle } from '../shared/VehiclesResponse';

export const loadVehicles = createAction('[Body Insurance] Load Vehicles Data');

export const loadVehiclesSuccess = createAction(
  '[Body Insurance - Car Detail] Load Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);

export const loadVehiclesError = createAction(
  '[Body Insurance - Car Detail] Load Vehicles Error'
);

export const changeBrand = createAction(
  '[Body Insurance - Car Detail] Change Brand',
  props<{ brand: string }>()
);
export const changeModel = createAction(
  '[Body Insurance - Car Detail] Change Model',
  props<{ model: string }>()
);
