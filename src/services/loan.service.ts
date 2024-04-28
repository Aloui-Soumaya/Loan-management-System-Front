import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
    constructor(private http: HttpClient) { }

    loan(idClient: string, amount: number){
        return  this.http.post<void>(`http://localhost:8080/commercial-service/api/commercial/apply/${idClient}/${amount}`,{})
            .pipe(catchError((err)=>{
            return EMPTY
        }))
    }
    getCreditDecision(): Promise<string> {
    return fetch('http://localhost:8080/credit-service/api/credit/decision')
      .then(response => response.text())
      .catch(error => {
        console.error('Error fetching credit decision:', error);
        throw error; // Rethrow the error to handle it in the component
      });
  }
}