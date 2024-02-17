import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

const PrimeModules = [ButtonModule, MenubarModule, SidebarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeModules],
  exports: [PrimeModules],
})
export class FeaturesModule {}
