import { Component, signal } from '@angular/core';
import { FrhSideMenuComponent, TitleColor } from 'frh-side-menu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FrhSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frh-testbed-app';

  titleColor = TitleColor

  isAuthenticated = signal(false);
}
