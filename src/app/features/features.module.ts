import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';

const PrimeModules = [
  ButtonModule,
  MenubarModule,
  SidebarModule,
  CardModule,
  PaginatorModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeModules],
  exports: [PrimeModules],
})
export class FeaturesModule {}
