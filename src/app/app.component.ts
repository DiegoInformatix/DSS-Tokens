import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1Component, Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'USWDS';

  // Método para alternar la clase "dark-theme" en el body
  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
