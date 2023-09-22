import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

 import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "http://localhost/PRUEBA-CAPI/capi_examen_back_Antonio_Avila/api-CAPI/public/api/users";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }


}
