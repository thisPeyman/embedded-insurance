import { createFeature, createReducer, on } from '@ngrx/store';
import { PriceInquiryResponse } from '../shared/PriceInquiry';
import { SelectedVehicle } from '../shared/SelectedVehicle';
import { Vehicle } from '../shared/VehiclesResponse';

import * as BodyActions from './body.action';

interface State {
  vehicles: Vehicle[];
  flowStep: number;
  selectedVehicle: SelectedVehicle;
  priceInquiry: PriceInquiryResponse | null;
  customerInfo: {
    id: string;
  };
}

const initialState: State = {
  vehicles: [],
  flowStep: 5,
  selectedVehicle: {
    brand: '',
    model: '',
    usage: '',
    builtYear: 0,
    hasInsuranceHistory: false,
    isBrandNew: false,
    price: 0,
    mainDiscountYears: 0,
    sideDiscountYears: 0,
    selectedPackage: '',
    additionalCovs: undefined,
  },
  customerInfo: {
    id: '0',
  },
  priceInquiry: null,
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
    })),
    on(BodyActions.nextFlow, (state) => ({
      ...state,
      flowStep: state.flowStep + 1,
    })),
    on(BodyActions.prevFlow, (state) => ({
      ...state,
      flowStep: state.flowStep - 1,
    })),
    on(BodyActions.resetFlow, (state) => ({ ...state, flowStep: 1 })),
    on(BodyActions.inquiryPriceSuccess, (state, { inquiry }) => ({
      ...state,
      priceInquiry: inquiry,
    })),
    on(BodyActions.resetPriceInquiry, (state) => ({
      ...state,
      priceInquiry: null,
    })),
    on(BodyActions.submitCustomerSuccess, (state, { id }) => ({
      ...state,
      customerInfo: { id },
    }))
  ),
});
