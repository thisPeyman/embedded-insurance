import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

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
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { PackageCardComponent } from './components/inquiry/package-card/package-card.component';
import { OptionNamePipe } from './components/inquiry/option-name.pipe';
import { FullBodyPackageComponent } from './components/inquiry/full-body-package/full-body-package.component';

@NgModule({
  declarations: [
    BodyComponent,
    CarDetailComponent,
    CarPriceComponent,
    InquiryComponent,
    PackageCardComponent,
    OptionNamePipe,
    FullBodyPackageComponent,
  ],
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
    NzCheckboxModule,
  ],
  providers: [BodyFacade, BodyService],
})
export class BodyModule {}
