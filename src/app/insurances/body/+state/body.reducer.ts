import { createFeature, createReducer, on } from '@ngrx/store';
import { SelectedVehicle } from '../shared/SelectedVehicle';
import { Vehicle } from '../shared/VehiclesResponse';

import * as BodyActions from './body.action';

interface State {
  vehicles: Vehicle[];
  flowStep: number;
  selectedVehicle: SelectedVehicle;
}

const initialState: State = {
  vehicles: [],
  flowStep: 1,
  selectedVehicle: {
    brand: '',
    model: '',
    usage: '',
    builtYear: 0,
  },
};

export const bodyFeature = createFeature({
  name: 'body-insurance',
  reducer: createReducer(
    initialState,
    on(BodyActions.loadVehiclesSuccess, (state, { vehicles }) => ({
      ...state,
      vehicles,
    })),
    on(BodyActions.updateVehicle, (state, action) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, ...action.vehicle },
    }))
  ),
});
