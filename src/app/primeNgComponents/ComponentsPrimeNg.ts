import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TreeModule } from 'primeng/tree';
import { ToolbarModule } from 'primeng/toolbar';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    SidebarModule,
    StyleClassModule,
    RippleModule,
    AvatarModule,
    MenuModule,
    BadgeModule,
    PanelMenuModule,
    TreeModule,
    ToolbarModule,
    CalendarModule,
    TreeSelectModule,
    TableModule,
    ToastModule,

  ],
  exports: [
    ButtonModule,
    SidebarModule,
    StyleClassModule,
    RippleModule,
    AvatarModule,
    MenuModule,
    BadgeModule,
    PanelMenuModule,
    TreeModule,
    ToolbarModule,
    CalendarModule,
    TreeSelectModule,
    TableModule,
    ToastModule
  ]
})

export class ComponentsPrimeNg {}
