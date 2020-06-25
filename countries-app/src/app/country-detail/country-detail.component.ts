import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit {
  country: Country;

  constructor(private route: ActivatedRoute, 
    private service: CountriesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(country => {
      if(country && country.id) { 
        this.loadDetails(country.id);
      }
    });
  }

  loadDetails(countryName: string) {
    this.service.getCountryByName(countryName)
    .subscribe(countryDetails => this.country = countryDetails);
  }

}
