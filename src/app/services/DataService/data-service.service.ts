import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon';
  limit: number = 20;
  getAllPokemon() {
    return this._http.get(`${this.url}?limit=${this.limit}`);
  }

  getMorePokemon(name: string) {
    return this._http.get(`${this.url}/${name}`);
  }
}
