import { createSelector } from '@ngrx/store';
import { FullbodyOptions, PriceInquiryBody } from '../shared/PriceInquiry';
import { bodyFeature } from './body.reducer';

export const {
  selectVehicles,
  selectFlowStep,
  selectSelectedVehicle,
  selectPriceInquiry,
  selectCustomerInfo,
} = bodyFeature;

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

export const selectFullbodyOptions = createSelector(
  selectPriceInquiry,
  (prices) => {
    if (!prices) return null;
    const fullbodyOptions: FullbodyOptions[] = [];
    const fullbody = prices.price_inquiry.full_body;

    for (const [key, value] of Object.entries(fullbody)) {
      const isBasePrice = key === 'base_price';
      fullbodyOptions.push({
        key,
        checked: isBasePrice,
        disabled: isBasePrice,
        price: value,
      });
    }

    return fullbodyOptions;
  }
);
