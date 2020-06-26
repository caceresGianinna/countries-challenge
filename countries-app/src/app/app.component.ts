import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public isLight: boolean;

  constructor(private themeService: ThemeService) {}  

  ngOnInit() { 
    this.isLight = this.themeService.isLightTheme;
  }
  
  toggleTheme() {
    const theme = !this.isLight ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }
}
