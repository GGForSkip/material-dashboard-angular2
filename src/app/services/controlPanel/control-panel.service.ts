import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FullResearchResult } from 'app/bo/research/FullResearchResult';
import { Router } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelService {

  constructor(private httpClient: HttpClient,private router: Router) { }

  public findResearches$(period: string): Observable<FullResearchResult[]> {
    return null;
  }



}
