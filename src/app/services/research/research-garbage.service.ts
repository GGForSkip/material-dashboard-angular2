import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'app/bo/location/City';
import { Commune } from 'app/bo/location/Commune';
import { Country } from 'app/bo/location/Country';
import { Nation } from 'app/bo/location/Nation';
import { SearchResult } from 'app/bo/research/SearchResult';
import { Router } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchGarbageService {

  constructor(private httpClient: HttpClient,private router: Router) { }

  domain=[
      {
        key: '1',
        value: "Volvo"
      },
      {
        key: '2',
        value: "Bmw"
      },
      {
        key: '3',
        value: "Mercedes"
      },
      {
        key: '4',
        value: "Kia"
      },
    
  ];
  
  //#region location
  public countryList(){
    return this.domain;
  }
  public nationList(){
    return this.domain;
  }

  public cityList(){
    return this.domain;
  }

  public communeList(){
    return this.domain;
  }
  //#endregion location

  //#region search results
  public searchGarbageLocation(){
    return this.domain;
  }
  //#endregion search results
}
