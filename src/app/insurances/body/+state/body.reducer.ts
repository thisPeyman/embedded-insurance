import { createFeature, createReducer, on } from '@ngrx/store';
import { Vehicle } from '../shared/VehiclesResponse';

import * as BodyActions from './body.action';

interface State {
  vehicles: Vehicle[];
  flowStep: number;
  selectedVehicle: {
    brand: string;
    model: string;
  };
}

const initialState: State = {
  vehicles: [],
  flowStep: 1,
  selectedVehicle: {
    brand: '',
    model: '',
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
    on(BodyActions.changeBrand, (state, { brand }) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, brand, model: '' },
    })),
    on(BodyActions.changeModel, (state, { model }) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, model },
    }))
  ),
});
