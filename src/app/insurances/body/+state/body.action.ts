import { createAction, createFeature, props } from '@ngrx/store';
import { Vehicle } from '../shared/VehiclesResponse';
import { SelectedVehicle } from '../shared/SelectedVehicle';

export const loadVehicles = createAction(
  '[Body Insurance - Car Detail] Load Vehicles Data'
);

export const loadVehiclesSuccess = createAction(
  '[Body Insurance - Car Detail] Load Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);

export const loadVehiclesError = createAction(
  '[Body Insurance - Car Detail] Load Vehicles Error'
);

export const updateVehicle = createAction(
  '[Body Insurance - Car Detail] Update Selected Vehicle',
  props<{ vehicle: Partial<SelectedVehicle> }>()
);

export const nextFlow = createAction('[Body Insurance] Go To Next Flow');
export const prevFlow = createAction('[Body Insurance] Go To Previous Flow');
