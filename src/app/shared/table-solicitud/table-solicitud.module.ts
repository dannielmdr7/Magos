import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSolicitudComponent } from './table-solicitud.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [TableSolicitudComponent],
  imports: [CommonModule, NzTableModule],
  exports: [TableSolicitudComponent],
})
export class TableSolicitudModule {}
