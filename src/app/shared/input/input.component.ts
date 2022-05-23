import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() title = '';
  @Input() type = 'text';
  @Input() dir = 'ltr';
  @Input() control: any;

  constructor() {}

  ngOnInit(): void {}

  numberInputFormat(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
