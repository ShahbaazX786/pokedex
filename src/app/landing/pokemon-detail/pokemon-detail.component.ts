import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/DataService/data-service.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(private _DS: DataService){};

  ngOnInit(): void {
    const pokemon = localStorage.getItem('currentPokemon');
    const res = this._DS.getSpecificPokemon(pokemon!);
    console.warn(pokemon);
    console.warn(res);
  }
}
