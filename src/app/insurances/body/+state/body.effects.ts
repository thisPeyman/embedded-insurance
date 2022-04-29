import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BodyService } from '../shared/body.service';
import * as BodyActions from './body.action';

@Injectable()
export class BodyEffects {
  loadVehicles = createEffect(() =>
    this.actions$.pipe(
      ofType(BodyActions.loadVehicles),
      mergeMap(() =>
        this.bodyService.getVehiclesData().pipe(
          map((vehicles) => {
            return BodyActions.loadVehiclesSuccess({ vehicles });
          }),
          catchError((err) => of(BodyActions.loadVehiclesError()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly bodyService: BodyService
  ) {}
}
