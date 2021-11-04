import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { TableComponentModule } from '../../shared/table-component/table-component.module';

@NgModule({
  declarations: [ProfesoresComponent],
  imports: [CommonModule, ProfesoresRoutingModule, TableComponentModule],
})
export class ProfesoresModule {}
