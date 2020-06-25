import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/Country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.less']
})
export class CountryComponent implements OnInit {
  @Input() country: Country;

  constructor(private router: Router){}

  ngOnInit() {
    console.log(this.country);
  }

  viewCountry() { 
    this.router.navigate(['country', this.country.name]);
  }
}
