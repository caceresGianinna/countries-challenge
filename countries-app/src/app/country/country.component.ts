import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Country } from '../models/Country';
import { Router } from '@angular/router';
import { Theme } from '../models/Theme';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.less']
  // encapsulation: ViewEncapsulation.None
})
export class CountryComponent implements OnInit {
  @Input() country: Country;
  @Input() selectedTheme: Theme;

  constructor(private router: Router){}

  ngOnInit() {
  }

  viewCountry() { 
    this.router.navigate(['country', this.country.name]);
  }
}
