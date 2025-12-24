import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { PrivateMenuComponent } from './layouts/private-menu/private-menu.component';
import { PublicHeaderComponent } from './layouts/public-header/public-header.component';
import { PublicMenuComponent } from './layouts/public-menu/public-menu.component';

@Component({
  selector: 'app-root',
imports: [
    RouterOutlet,
    PublicHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent
  ],  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mini-aplicacion');
}