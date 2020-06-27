import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './theme.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Theme } from './models/Theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  public isLight: boolean;
  public theme$: Observable<Theme>;
  private destroyed$ = new Subject();

  constructor(private themeService: ThemeService) {}  

  ngOnInit() { 
    this.theme$ = this.themeService.selectedTheme$.asObservable();
    this.themeService.isLightTheme$
    .pipe(takeUntil(this.destroyed$))
    .subscribe(x => this.isLight = x);
  }
  
  toggleTheme() {
    const theme = this.isLight ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

  ngOnDestroy() { 
    this.destroyed$.next(true);
  }
}
