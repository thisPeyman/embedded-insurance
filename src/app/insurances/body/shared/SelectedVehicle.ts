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
  additionalInfo?: AdditionalInfo;
  insuranceHistory?: InsuranceHistory;
  inquiryId?: number;
}

export interface AdditionalInfo {
  color_id: number;
  plaque_left_no: number;
  plaque_middle_char_id: number;
  plaque_serial: number;
  motor_no: string;
  vin: string;
  chasis_no: string;
}

export interface InsuranceHistory {
  previous_policy_begin_date: string;
  previous_policy_end_date: string;
  previous_insurance_corp_id: number;
  previous_policy_no: number;
}
