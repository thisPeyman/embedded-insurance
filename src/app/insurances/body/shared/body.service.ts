import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vehicle } from './VehiclesResponse';

@Injectable()
export class BodyService {
  rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getVehiclesData() {
    return this.http.get<Vehicle[]>(`${this.rootUrl}/vehicle_models`);
  }
}
