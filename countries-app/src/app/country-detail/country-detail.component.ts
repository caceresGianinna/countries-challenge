import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { CountriesService } from '../countries.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from '../theme.service';
import { Theme } from '../models/Theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  selectedTheme$: Observable<Theme>;
  country: Country;
  
  constructor(
    private route: ActivatedRoute, 
    private themeService: ThemeService,
    private router: Router,
    private service: CountriesService) { }

  ngOnInit(): void {
    this.selectedTheme$ = this.themeService.selectedTheme$;
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
    .subscribe(countryDetails => {
      this.country = {
        ...countryDetails[0],
        currencies: this.formatArr(countryDetails[0].currencies),
        languages: this.formatArr(countryDetails[0].languages)
      };
    });
  }

  private formatArr(arr: any[]): string{ 
    return arr.map(i=> i.name).join(', ');
  }

  navigateToDashboard() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }
  

}
