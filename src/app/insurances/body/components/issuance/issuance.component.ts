import { Component, OnInit } from '@angular/core';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.scss'],
})
export class IssuanceComponent implements OnInit {
  constructor(public bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.issuance();
  }
}
