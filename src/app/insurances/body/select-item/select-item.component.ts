import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss'],
})
export class SelectItemComponent implements OnInit {
  @Input() options: string[] | null = null;
  @Input() title = '';
  @Input() selectedValue: string | null = '';
  @Output() onChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  optionChanged(event: string) {
    this.onChange.emit(event);
  }
}
