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

@NgModule({
  declarations: [BodyComponent, CarDetailComponent, SelectItemComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NzSpinModule,
    NzIconModule,
    NzSelectModule,
    FormsModule,
  ],
})
export class BodyModule {}
