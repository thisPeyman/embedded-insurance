import { createSelector } from '@ngrx/store';
import { bodyFeature } from './body.reducer';

export const { selectVehicles, selectFlowStep, selectSelectedVehicle } =
  bodyFeature;

export const selectSelectedBrand = createSelector(
  selectSelectedVehicle,
  ({ brand }) => brand
);
export const selectSelectedModel = createSelector(
  selectSelectedVehicle,
  ({ model }) => model
);

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
  selectSelectedBrand,
  selectVehicles,
  (brand, vehicles) => {
    return vehicles
      .filter((vehicle) => vehicle.category === brand)
      .map((vehicle) => vehicle.caption);
  }
);
