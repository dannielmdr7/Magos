import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleUsersComponent } from './handle-users.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TableSolicitudModule } from '../table-solicitud/table-solicitud.module';

@NgModule({
  declarations: [HandleUsersComponent],
  imports: [
    CommonModule,
    NzModalModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    TableSolicitudModule,
  ],
  exports: [HandleUsersComponent],
})
export class HandleUsersModule {}
