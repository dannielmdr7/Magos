import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [PersonajesComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    NzDividerModule,
    NzTableModule,
  ],
})
export class PersonajesModule {}
