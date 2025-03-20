import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LayoutRoutingModule } from './layout-routing.module';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule
  ]
})
export class LayoutModule { }
