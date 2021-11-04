import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [ProfesoresComponent],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    NzDividerModule,
    NzTableModule,
  ],
})
export class ProfesoresModule {}
