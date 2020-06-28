import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { CountriesService } from '../countries.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  country: Country;
  
  constructor(
    private route: ActivatedRoute, 
    private service: CountriesService) { }

  ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.destroyed$))
    .subscribe(country => {
      if(country && country.id) { 
        this.loadDetails(country.id);
      }
    });
  }

  loadDetails(countryName: string) {
    this.service.getCountryByName(countryName)
    .pipe(takeUntil(this.destroyed$))
    .subscribe(countryDetails => this.country = countryDetails);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

}
