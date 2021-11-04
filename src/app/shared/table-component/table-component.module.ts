import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponentComponent } from './table-component.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [TableComponentComponent],
  imports: [CommonModule, NzDividerModule, NzTableModule],
  exports: [TableComponentComponent],
})
export class TableComponentModule {}
