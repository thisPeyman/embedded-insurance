import { createFeature, createReducer, on } from '@ngrx/store';
import { Customer } from '../shared/Customer';
import { PriceInquiryResponse } from '../shared/PriceInquiry';
import { SelectedVehicle } from '../shared/SelectedVehicle';
import { Vehicle } from '../shared/VehiclesResponse';

import * as BodyActions from './body.action';

interface State {
  vehicles: Vehicle[];
  flowStep: number;
  selectedVehicle: SelectedVehicle;
  priceInquiry: PriceInquiryResponse | null;
  customerInfo: Customer;
  generalLoading: boolean;
}

const initialState: State = {
  vehicles: [],
  flowStep: 1,
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
  },
  customerInfo: {
    address: '',
    birth_day: 0,
    birth_month: 0,
    birth_year: 0,
    city_id: 0,
    id: '',
    mobile: '',
    national_code: '',
    postal_code: '',
    tel: '',
  },
  priceInquiry: null,
  generalLoading: false,
};

export const bodyFeature = createFeature({
  name: 'BodyInsurance',
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
    on(BodyActions.updateVehicleAdditional, (state, { data }) => ({
      ...state,
      selectedVehicle: {
        ...state.selectedVehicle,
        additionalInfo: { ...data },
      },
    })),
    on(BodyActions.updateVehicleHistory, (state, { data }) => ({
      ...state,
      selectedVehicle: {
        ...state.selectedVehicle,
        insuranceHistory: { ...data },
      },
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
      selectedVehicle: {
        ...state.selectedVehicle,
        inquiryId: inquiry.inquiry_id,
      },
    })),
    on(BodyActions.resetPriceInquiry, (state) => ({
      ...state,
      priceInquiry: null,
    })),
    on(BodyActions.submitCustomer, (state, { customer }) => ({
      ...state,
      customerInfo: { ...state.customerInfo, ...customer },
    })),
    on(BodyActions.customerSuccess, (state, { id }) => ({
      ...state,
      customerInfo: { ...state.customerInfo, id },
    })),
    on(BodyActions.setGeneralLoading, (state, { isLoading }) => ({
      ...state,
      generalLoading: isLoading,
    }))
  ),
});
