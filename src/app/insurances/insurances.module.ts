import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsurancesRoutingModule } from './insurances-routing.module';
import { InsurancesComponent } from './insurances.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InsurancesComponent],
  imports: [CommonModule, InsurancesRoutingModule, SharedModule],
})
export class InsurancesModule {}
