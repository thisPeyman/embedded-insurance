export interface SelectedVehicle {
  brand: string;
  model: string;
  usage: string;
  builtYear: number;
  price: number;
  hasInsuranceHistory: boolean;
  isBrandNew: boolean;
  mainDiscountYears: number;
  sideDiscountYears: number;
  selectedPackage: string;
  additionalCovs?: string[];
}
