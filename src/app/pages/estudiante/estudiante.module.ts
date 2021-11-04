import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [EstudianteComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    NzDividerModule,
    NzTableModule,
  ],
})
export class EstudianteModule {}
