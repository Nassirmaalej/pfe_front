import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private baseUrl = 'http://localhost:8081/regle/red';
  private headers = new Headers({'Content-Type':'application/json'});
  
  constructor(private http: HttpClient) { }

  getevent(): Observable<any> {
    return this.http.get(this.baseUrl);
   
  }
 

}
