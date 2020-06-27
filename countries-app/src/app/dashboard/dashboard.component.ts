import { Component, OnInit, OnDestroy } from '@angular/core';

import { CountriesService } from '../countries.service';
import { Country } from '../models/Country';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from '../theme.service';
import { Theme } from '../models/Theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {
  countries: Country[];
  theme: Theme;

  private destroy$ = new Subject();

  constructor(private service: CountriesService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.selectedTheme$.subscribe(x => this.theme = x);
    this.service.getAllCountries()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(countries => this.countries = countries);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
