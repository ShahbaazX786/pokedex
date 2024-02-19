import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataService/data-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  constructor(private _DS: DataService, private _router:Router){}

  @Input() data: any;
  FetchPokemon(name:string){
    this._router.navigateByUrl('/pokemon-detail',);
    localStorage.setItem('currentPokemons', JSON.stringify(name));
  }
}
