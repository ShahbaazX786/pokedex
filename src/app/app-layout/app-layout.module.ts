import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, FeaturesModule],
  exports: [NavbarComponent, FooterComponent],
})
export class AppLayoutModule {}
