export interface PriceInquiryBody {
  vehicle_value: number;
  vehicle_kind_id: number;
  built_year: number;
  basic_discount_years: number;
  additional_discount_years: number;
}

export interface PriceInquiryResponse {
  price_inquiry: {
    full_body: FullBodyInsurance;
    stealing: { price: number };
    stealing_package: { price: number };
  };
  inquiry_id: number;
}

export interface FullbodyOptions {
  key: string;
  disabled: boolean;
  checked: boolean;
  price: number;
}

interface FullBodyInsurance {
  natural_disaster: number;
  glass_break: number;
  insteal: number;
  splash_paint: number;
  transportation: number;
  price_fluctuation: number;
  base_price: number;
}
