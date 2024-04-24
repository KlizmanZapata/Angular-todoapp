import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear componente',
    'Crear servicio'
  ];
}
