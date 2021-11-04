import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { TableComponentModule } from '../../shared/table-component/table-component.module';

@NgModule({
  declarations: [EstudianteComponent],
  imports: [CommonModule, EstudianteRoutingModule, TableComponentModule],
})
export class EstudianteModule {}
