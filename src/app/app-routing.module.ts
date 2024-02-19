import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { PokemonDetailComponent } from './landing/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'pokemon-detail', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
