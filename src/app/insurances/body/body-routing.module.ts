import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentSuccessResolver } from './components/payment-success/payment-success.resolver';

const routes: Routes = [
  { path: '', component: BodyComponent },
  {
    path: 'payment-success',
    component: PaymentSuccessComponent,
    resolve: { data: PaymentSuccessResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyRoutingModule {}
