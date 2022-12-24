import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Data {
  ID:number;
  country: string;
  Modal: string;
  Vehicle_Type:string;
  Unit:number;
  date:string;
  Quarter:string;
}

@Injectable({
  providedIn: 'root'
})
export class AutomobileServiceService {
  private dataUrl = 'api/data/';
  constructor(private http: HttpClient) { }
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dataUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
