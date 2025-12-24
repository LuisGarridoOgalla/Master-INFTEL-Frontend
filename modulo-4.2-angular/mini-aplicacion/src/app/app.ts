import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { PrivateMenuComponent } from './layouts/private-menu/private-menu.component';
import { PublicHeaderComponent } from './layouts/public-header/public-header.component';
import { PublicMenuComponent } from './layouts/public-menu/public-menu.component';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { PrivateHeaderComponent } from './layouts/private-header/private-header.component';

@Component({
  selector: 'app-root',
imports: [
    CommonModule,
    RouterOutlet,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent
  ],  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isLogged$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isLogged$ = this.authService.isLogged$;
  }
}