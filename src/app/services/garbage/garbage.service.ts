
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class GarbageService {

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

  public garbageList(){
    return this.domain;
  }

  public garbageFromDescription(descr: string){

  }

  public garbageListForTipology(type: number){

  }

  public garbageFromEER(eerCode: string){
    
  }


}
