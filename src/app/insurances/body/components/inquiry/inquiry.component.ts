import { Component, OnInit } from '@angular/core';
import { BodyFacade } from '../../+state/body.facade';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent implements OnInit {
  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {
    this.bodyFacade.inquiryPrice();
  }
}
