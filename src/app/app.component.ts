import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Listado', url: '/folder/Outbox', icon: 'list' },
    { title: 'Gestión', url: '/folder/Favorites', icon: 'create' },
    { title: 'Contacto', url: '/folder/Archived', icon: 'call' },
  ];
  /* public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/constructor() {}
}
