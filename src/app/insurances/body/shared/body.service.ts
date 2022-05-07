import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerBody } from './Customer';
import { PriceInquiryBody, PriceInquiryResponse } from './PriceInquiry';
import { Vehicle } from './VehiclesResponse';

@Injectable()
export class BodyService {
  rootUrl = environment.apiUrl;
  vehiclesCatch?: Vehicle[];

  constructor(private http: HttpClient) {}

  getVehiclesData() {
    if (this.vehiclesCatch) return of(this.vehiclesCatch);

    return this.http
      .get<Vehicle[]>(`${this.rootUrl}/vehicle_models`)
      .pipe(tap((v) => (this.vehiclesCatch = v)));
  }

  inquiryPrice(body: PriceInquiryBody) {
    return this.http.post<PriceInquiryResponse>(
      `${this.rootUrl}/price_inquiry`,
      body
    );
  }

  sumbitCustomer(body: CustomerBody) {
    return this.http.post<{ customer_id: string; message: string }>(
      `${this.rootUrl}/add_customer`,
      body
    );
  }
}
