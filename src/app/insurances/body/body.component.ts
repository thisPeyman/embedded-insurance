import { Component, OnDestroy, OnInit } from '@angular/core';
import { BodyFacade } from './+state/body.facade';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  flowStep$ = this.bodyFacade.flowStep$;

  constructor(private bodyFacade: BodyFacade) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.bodyFacade.resetFlow();
  }
}
