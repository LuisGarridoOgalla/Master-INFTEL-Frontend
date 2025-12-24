import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-private-menu',
imports: [RouterModule, MatButtonModule],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss'
})
export class PrivateMenuComponent {

}
