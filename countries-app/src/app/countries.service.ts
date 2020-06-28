import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, CountryResponse } from './models/Country';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
   private API = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get(`${this.API}/all`) as Observable<Country[]>;
  }

  /**
   * Search by region: Africa, Americas, Asia, Europe, Oceania
   * @param region 
   */
  searchByRegion(region: string) {
    return this.http.get(`${this.API}/${region}`) as Observable<Country[]>;
  }

  /**
   * Search by country name. It can be the native name or partial name
   * @param countryName 
   */
  getCountryByName(countryName: string): Observable<CountryResponse[]> {
    return this.http.get(`${this.API}/name/${countryName}`) as Observable<CountryResponse[]>;
  }
}
