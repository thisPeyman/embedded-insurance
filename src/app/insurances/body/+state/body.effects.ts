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
      concatLatestFrom(() => this.bodyFacade.priceInquiryBody$),
      switchMap(([, value]) =>
        this.bodyService.inquiryPrice(value).pipe(
          map((v) => {
            return { type: 'Hello There' };
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly bodyService: BodyService,
    private readonly bodyFacade: BodyFacade
  ) {}
}
