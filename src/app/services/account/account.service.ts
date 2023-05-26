import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditPassword } from 'app/bo/EditPassword';
import { User } from 'app/bo/User';
import { environment } from 'environments/environment';
import { Router } from 'express';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  
  constructor(private httpClient: HttpClient,private router: Router) { }

  public get userValue(){
    return this.userSubject.value;
  }

  public editInfo(user: User){
    this.httpClient.post<User>(`${environment.apiUrl}/auth/editInfo`, { user })
    .pipe(map(response => {
      return response;
    }));
  }

  public editEmail(email: string){
    this.httpClient.post<User>(`${environment.apiUrl}/auth/editEmail`, {  })
    .pipe(map(response => {
      return response;
    }));
  }

  
  public deleteProfile(id: number){
    this.httpClient.post<User>(`${environment.apiUrl}/auth/deleteProfile`, { id })
    .pipe(map(response => {
      return response;
    }));
  }

  public editPassword(editPasword: EditPassword){
    this.httpClient.post<User>(`${environment.apiUrl}/auth/editPassword`, { editPasword })
    .pipe(map(response => {
      return response;
    }));
  }

  public logout(){
    this.httpClient.post<void>(`${environment.apiUrl}/auth/signout`, {})
    .pipe(map(response => {
      return response;
    }));
  }
}
