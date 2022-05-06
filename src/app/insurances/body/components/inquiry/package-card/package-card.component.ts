import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
})
export class PackageCardComponent implements OnInit {
  @Input() title = '';
  @Input() price = 0;

  @Output() purchase = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
