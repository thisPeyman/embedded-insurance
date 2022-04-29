import { createFeature, createReducer, on } from '@ngrx/store';
import { Vehicle } from '../shared/VehiclesResponse';

import * as BodyActions from './body.action';

interface State {
  vehicles: Vehicle[];
  flowStep: number;
  selectedVehicle: {
    brand: string;
    model: string;
    usage: string;
    builtYear: number;
  };
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
    on(BodyActions.changeBrand, (state, { brand }) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, brand, model: '' },
    })),
    on(BodyActions.changeModel, (state, { model }) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, model },
    })),
    on(BodyActions.changeUsage, (state, { usage }) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, usage },
    })),
    on(BodyActions.changeBuiltYear, (state, { builtYear }) => ({
      ...state,
      selectedVehicle: { ...state.selectedVehicle, builtYear },
    }))
  ),
});
