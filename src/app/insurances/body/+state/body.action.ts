import { createAction, createFeature, props } from '@ngrx/store';
import { Vehicle } from '../shared/VehiclesResponse';
import { SelectedVehicle } from '../shared/SelectedVehicle';
import { PriceInquiryResponse } from '../shared/PriceInquiry';
import { Customer } from '../shared/Customer';

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
export const resetFlow = createAction('[Body Insurance] Reset Flow Step');

export const inquiryPrice = createAction(
  '[Body Insurance - Inquiry] Inquiry The Insurance Prices'
);
export const inquiryPriceSuccess = createAction(
  '[Body Insurance - Inquiry] Price Inquiry Success',
  props<{ inquiry: PriceInquiryResponse }>()
);
export const resetPriceInquiry = createAction(
  '[Body Insurance - Inquiry] Reset State'
);

export const submitCustomer = createAction(
  '[Body Insurance] Submit Customer',
  props<{ customer: Partial<Customer> }>()
);
export const customerSuccess = createAction(
  '[Body Insurance] Customer Get Id Success',
  props<{ id: string }>()
);
