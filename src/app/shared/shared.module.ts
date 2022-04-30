import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SelectItemComponent } from './select-item/select-item.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputComponent } from './input/input.component';
import { SwitchComponent } from './switch/switch.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectItemComponent,
    InputComponent,
    SwitchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzSelectModule,
    FormsModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSwitchModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SelectItemComponent,
    InputComponent,
    SwitchComponent,
  ],
})
export class SharedModule {}
