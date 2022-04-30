import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
