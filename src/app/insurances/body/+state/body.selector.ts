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

export const selectIssuanceReqBody = createSelector(
  selectSelectedVehicle,
  selectCustomerInfo,
  (vehicle, customer) => {
    return {
      insurance_package: vehicle.selectedPackage,
      additional_covs: vehicle.additionalCovs,
      inquiry_id: vehicle.inquiryId,
      cutomer_id: customer.id,
      national_code: customer.national_code,
      previous_policy_begin_date:
        vehicle.insuranceHistory?.previous_policy_begin_date,
      previous_policy_end_date:
        vehicle.insuranceHistory?.previous_policy_end_date,
      previous_insurance_corp_id:
        vehicle.insuranceHistory?.previous_insurance_corp_id,
      previous_policy_no: vehicle.insuranceHistory?.previous_policy_no,
      color_id: vehicle.additionalInfo?.color_id,
      motor_no: vehicle.additionalInfo?.motor_no,
      plaque_left_no: vehicle.additionalInfo?.plaque_left_no,
      plaque_middle_char_id: vehicle.additionalInfo?.plaque_middle_char_id,
      plaque_serial: vehicle.additionalInfo?.plaque_serial,
      chasis_no: vehicle.additionalInfo?.chasis_no,
      vin: vehicle.additionalInfo?.vin,
    };
  }
);
