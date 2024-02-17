import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SearchModule } from '../search/search.module';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../features/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    SearchModule,
    FeaturesModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LandingModule { }
