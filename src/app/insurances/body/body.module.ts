import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyFacade } from './+state/body.facade';
import { BodyService } from './shared/body.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BodyEffects } from './+state/body.effects';
import { StoreModule } from '@ngrx/store';
import { bodyFeature } from './+state/body.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarPriceComponent } from './components/car-price/car-price.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [BodyComponent, CarDetailComponent, CarPriceComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NzSpinModule,
    NzIconModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([BodyEffects]),
    StoreModule.forFeature(bodyFeature),
    NzSwitchModule,
  ],
  providers: [BodyFacade, BodyService],
})
export class BodyModule {}
