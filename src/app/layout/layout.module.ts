import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NavBarComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
