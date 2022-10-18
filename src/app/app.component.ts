import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Listado', url: '/folder/Listado', icon: 'list' },
    { title: 'Gestión', url: '/folder/Gestion', icon: 'create' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'call' },
  ];
  constructor() {}
}
