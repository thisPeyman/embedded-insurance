import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SelectItemComponent } from './select-item/select-item.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SelectItemComponent],
  imports: [CommonModule, RouterModule, NzSelectModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, SelectItemComponent],
})
export class SharedModule {}
