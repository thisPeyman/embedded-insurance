import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancesComponent } from './insurances.component';

const routes: Routes = [
  {
    path: '',
    component: InsurancesComponent,
    children: [
      {
        path: 'body',
        loadChildren: () =>
          import('./body/body.module').then((m) => m.BodyModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancesRoutingModule {}
