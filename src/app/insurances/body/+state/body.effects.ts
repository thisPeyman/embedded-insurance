import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { BodyService } from '../shared/body.service';
import * as BodyActions from './body.action';
import { BodyFacade } from './body.facade';

@Injectable()
export class BodyEffects {
  loadVehicles = createEffect(() =>
    this.actions$.pipe(
      ofType(BodyActions.loadVehicles),
      switchMap(() =>
        this.bodyService.getVehiclesData().pipe(
          map((vehicles) => {
            return BodyActions.loadVehiclesSuccess({ vehicles });
          }),
          catchError((err) => of(BodyActions.loadVehiclesError()))
        )
      )
    )
  );

  inquiryPrice = createEffect(() =>
    this.actions$.pipe(
      ofType(BodyActions.inquiryPrice),
      concatLatestFrom(() => this.bodyFacade.httpPriceInquiry$),
      switchMap(([, value]) =>
        this.bodyService.inquiryPrice(value).pipe(
          map((inquiry) => {
            return BodyActions.inquiryPriceSuccess({ inquiry });
          })
        )
      )
    )
  );

  submitCustomer = createEffect(() =>
    this.actions$.pipe(
      ofType(BodyActions.submitCustomer),
      switchMap((data) =>
        this.bodyService.sumbitCustomer(data.customer).pipe(
          map(({ customer_id }) => {
            this.bodyFacade.nextFlow();
            return BodyActions.customerSuccess({ id: customer_id });
          }),
          catchError((e) => {
            window.alert(e.error.message);
            return of({ type: 'error in submitting customer' });
          })
        )
      )
    )
  );

  issuance = createEffect(() =>
    this.actions$.pipe(
      ofType(BodyActions.issuance),
      concatLatestFrom(() => this.bodyFacade.httpIssuance$),
      switchMap(([, value]) =>
        this.bodyService
          .issuance(value)
          .pipe(map((value) => ({ type: 'success' })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly bodyService: BodyService,
    private readonly bodyFacade: BodyFacade
  ) {}
}
