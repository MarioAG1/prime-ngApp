import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'share-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop',
        items: [
          {
            label: "Textos y flechas",
            routerLink: "/",
            icon: "pi pi-align-left"
          },
          {
            label: "Numeros",
            routerLink: "/numbers",
            icon: "pi pi-dollar"
          },
          {
            label: "No comunes",
            routerLink: "/uncommon",
            icon: "pi pi-globe"
          }
        ]
      },
      {
        label: "Pipes pesonalizados", icon: "pi pi-cog",
        items: [
          {
            label: "Custom pipes",
            icon: "pi pi-cog",
            routerLink: "/custom"
          }
        ]
      }
    ];

  }
}
