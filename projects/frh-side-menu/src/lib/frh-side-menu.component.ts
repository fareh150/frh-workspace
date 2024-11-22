import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor{
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-frh-side-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './frh-side-menu.component.html',
  styles: ``
})
export class FrhSideMenuComponent
{
  title = input('FRH')
  subtitle = input('Corp')
  titleColor = input<TitleColor>(TitleColor.purple);

  activeCss = "rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
  isAuthenticated = input(false);
  onSignOut = output();
  onSignIn = output();
}
