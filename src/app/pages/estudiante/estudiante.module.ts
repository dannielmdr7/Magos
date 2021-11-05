import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { TableComponentModule } from '../../shared/table-component/table-component.module';
import { HandleUsersComponent } from '../../shared/handle-users/handle-users.component';
import { HandleUsersModule } from '../../shared/handle-users/handle-users.module';

@NgModule({
  declarations: [EstudianteComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    TableComponentModule,
    HandleUsersModule,
  ],
})
export class EstudianteModule {}
