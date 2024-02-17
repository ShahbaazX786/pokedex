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
        routerLink: '/home',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-user',
        routerLink: '/home',
      },
      {
        label: 'Info',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/home',
      },
    ];
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
