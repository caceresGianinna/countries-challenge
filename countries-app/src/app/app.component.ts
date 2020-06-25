import { Component } from '@angular/core';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'countries-app';
  defaultTheme = Themes.LIGHT;
}
