import { createSelector } from '@ngrx/store';
import { PriceInquiryBody } from '../shared/PriceInquiryBody';
import { bodyFeature } from './body.reducer';

export const { selectVehicles, selectFlowStep, selectSelectedVehicle } =
  bodyFeature;

export const selectVehicleBrands = createSelector(
  selectVehicles,
  (vehicles) => {
    const brands: string[] = [];

    for (let i = 0; i < vehicles.length; i++) {
      const brand = vehicles[i].category;
      if (!brands.includes(brand)) brands.push(brand);
    }
    return brands;
  }
);

export const selectVehicleModels = createSelector(
  selectSelectedVehicle,
  selectVehicles,
  ({ brand }, vehicles) => {
    return vehicles
      .filter((vehicle) => vehicle.category === brand)
      .map((vehicle) => vehicle.caption);
  }
);

export const selectInquiryReqBody = createSelector(
  selectSelectedVehicle,
  selectVehicles,
  (
    {
      builtYear,
      hasInsuranceHistory,
      isBrandNew,
      mainDiscountYears,
      model,
      price,
      sideDiscountYears,
      usage,
    },
    vehicles
  ) => {
    const vehicle = vehicles.find((v) => v.caption === model);

    const body: PriceInquiryBody = {
      vehicle_kind_id: +vehicle!.id,
      additional_discount_years: sideDiscountYears,
      basic_discount_years: mainDiscountYears,
      built_year: builtYear,
      vehicle_value: price,
    };

    return body;
  }
);

// {
//   "vehicle_value": 1800000000,
//   "vehicle_kind_id": 8972,
//   "built_year": 1390,
//   "basic_discount_years": 5,
//   "additional_discount_years": 5
// }
