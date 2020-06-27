import { Injectable } from '@angular/core';
import {Themes, Theme} from './models/Theme';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isLightThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isLightTheme$: Observable<boolean>;
  selectedTheme$ = new BehaviorSubject<Theme>(null);

  readonly themes: Themes = {
    'light': {
      'input-color': 'hsl(0, 0%, 52%)',
      'text-color': 'hsl(200, 15%, 8%)',
      'background-color': 'hsl(0, 0%, 98%)',
      'elements-color': 'hsl(0, 0%, 100%)'
    },
    'dark': {
      'text-color': 'hsl(0, 0%, 100%)',
      'elements-color': 'hsl(209, 23%, 22%)',
      'background-color': 'hsl(207, 26%, 17%)',
      'input-color': 'hsl(209, 23%, 22%)'
    }

  }

  constructor() {
    // this.selectedTheme = this.themes.light;
    this.selectedTheme$.next(this.themes.light);
    this.isLightTheme$ = this.isLightThemeSubject.asObservable();
    this.isLightThemeSubject.next(true);

    this.selectedTheme$
    .subscribe(theme => this.applyTheme(theme));
  }


  setTheme(theme: 'light' | 'dark') {
    const isLight = theme === 'light' ? true : false;
    this.isLightThemeSubject.next(isLight);
    // this.selectedTheme = this.themes[theme];
    this.selectedTheme$.next(this.themes[theme]);
  }

  getTheme() {
    return this.selectedTheme$.value;
  }

  applyTheme(theme: Theme) { 
    Object.keys(theme).forEach(prop =>{
      document.documentElement.style.setProperty(`--${prop}`, theme[prop])}
    );
  }

}
