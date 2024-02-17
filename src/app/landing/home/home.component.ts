import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/DataService/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  AllPokemons: any[] = [];
  constructor(private _ds: DataService) {}

  ngOnInit(): void {
      this._ds.getAllPokemon().subscribe((global: any) => {
        global.results.forEach((result: any) => {
          this._ds
            .getMorePokemon(result.name)
            .subscribe((res: any) => this.AllPokemons.push(res));
        });
      });
      console.warn(this.AllPokemons);
    }
}
