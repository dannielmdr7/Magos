import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SelectComponent } from '../../shared/select/select.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [PersonajesComponent, SelectComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    NzDividerModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
  ],
})
export class PersonajesModule {}
