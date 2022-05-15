import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

interface PaymentParams {
  policy_no: string;
  nid: string;
  imei: string;
  issue_day: number;
  issue_month: number;
  issue_year: number;
  start_day: number;
  start_month: number;
  start_year: number;
}

export interface PaymentData {
  policyNo: string;
  nid: string;
  imei: string;
  issueTime: string;
  startTime: string;
}

@Injectable()
export class PaymentSuccessResolver implements Resolve<PaymentData> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PaymentData> {
    let params: PaymentParams = route.queryParams as any;

    let issueTime = `${params.issue_year}/${params.issue_month}/${params.issue_day}`;
    let startTime = `${params.start_year}/${params.start_month}/${params.start_day}`;

    const { imei, nid, policy_no } = params;

    return of({
      policyNo: policy_no,
      nid,
      imei,
      issueTime,
      startTime,
    });
  }
}
