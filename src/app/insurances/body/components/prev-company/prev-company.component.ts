import { Component, OnInit } from '@angular/core';
import { firstValueFrom, take } from 'rxjs';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-prev-company',
  templateUrl: './prev-company.component.html',
  styleUrls: ['./prev-company.component.scss'],
})
export class PrevCompanyComponent implements OnInit {
  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit() {
    this.checkPrevInsurance();
  }

  async checkPrevInsurance() {
    await firstValueFrom(this.bodyFacade.selectedVehicle$).then((v) => {
      if (!v.hasInsuranceHistory) this.bodyFacade.nextFlow();
    });
  }
}
