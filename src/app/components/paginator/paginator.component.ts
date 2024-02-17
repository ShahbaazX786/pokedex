import { Component } from '@angular/core';
import { DataService } from 'src/app/services/DataService/data-service.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  constructor(private _ds:DataService){}

  first:number = 0;
  rows: number = 10;
  totalRecords: number = 120;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 },
  ];

  onPageChange2(event: PageEvent | any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
