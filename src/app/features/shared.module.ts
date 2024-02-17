import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { FeaturesModule } from './features.module';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, FeaturesModule],
  exports: [PaginatorComponent],
})
export class SharedModule {}
