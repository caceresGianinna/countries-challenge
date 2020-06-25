import { Component, OnInit, OnDestroy } from '@angular/core';

import { CountriesService } from '../countries.service';
import { Country } from '../models/Country';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {
  countries: Country[];

  private destroy$ = new Subject();

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
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
