import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrhSideMenuComponent } from 'frh-side-menu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FrhSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frh-testbed-app';
}
