import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Info',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
