import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';
import { SelectItemComponent } from './select-item/select-item.component';
import { BodyFacade } from './+state/body.facade';
import { BodyService } from './shared/body.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BodyEffects } from './+state/body.effects';
import { StoreModule } from '@ngrx/store';
import { bodyFeature } from './+state/body.reducer';

@NgModule({
  declarations: [BodyComponent, CarDetailComponent, SelectItemComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NzSpinModule,
    NzIconModule,
    NzSelectModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forFeature([BodyEffects]),
    StoreModule.forFeature(bodyFeature),
  ],
  providers: [BodyFacade, BodyService],
})
export class BodyModule {}
