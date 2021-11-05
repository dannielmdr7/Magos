import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { SelectComponent } from '../../shared/select/select.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TableComponentModule } from '../../shared/table-component/table-component.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PersonajesComponent, SelectComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    NzDropDownModule,
    NzIconModule,
    TableComponentModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
  ],
})
export class PersonajesModule {}
