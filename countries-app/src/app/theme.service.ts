import { Injectable } from '@angular/core';


export interface Theme {
  'input-color': string;
  'elements-color': string;
  'text-color': string;
  'background-color': string;
}

interface Themes {
  [name: string]: Theme;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isLightTheme: boolean;
  selectedTheme: Theme;

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
    this.selectedTheme = this.themes.light;
    this.isLightTheme = true;
   }


  setTheme(theme: 'light' | 'dark') {   
    this.isLightTheme = theme === 'light' ? true : false ;
    this.selectedTheme = this.themes[theme];  
  }

  getTheme() {
    return this.selectedTheme;
  }

}
