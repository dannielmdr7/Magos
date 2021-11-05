import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { TableComponentModule } from '../../shared/table-component/table-component.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfesoresComponent],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    TableComponentModule,
    NzInputModule,
    FormsModule,
  ],
})
export class ProfesoresModule {}
