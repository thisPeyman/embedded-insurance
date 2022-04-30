import { Component, OnInit } from '@angular/core';
import { BodyFacade } from './+state/body.facade';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  flowStep$ = this.bodyFacade.flowStep$;

  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {}

  test() {
    this.bodyFacade.prevFlow();
  }
}
