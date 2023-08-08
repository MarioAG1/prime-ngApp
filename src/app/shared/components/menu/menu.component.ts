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
            icon: "pi pi-align-left"
          },
          {
            label: "Numeros",
            icon: "pi pi-dollar"
          },
          {
            label: "No comunes",
            icon: "pi pi-globe"
          }
        ]
      },
      {
        label: "Pipes pesonalizados", icon: "pi pi-cog",
        items: [
          {
            label: "Otro elemento",
            icon: "pi pi-cog"
          }
        ]
      }
    ];

  }
}
