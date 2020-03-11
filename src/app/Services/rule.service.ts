import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private baseUrl = 'http://localhost:8081/regle/red';
  private baseUrl1 = 'http://localhost:8081/regle/listrule';
  private baseUrlx='http://localhost:8081/regle/statx';
  private baseUrly='http://localhost:8081/regle/staty';
  private baseUrlz='http://localhost:8081/regle/statz';
  

  private headers = new Headers({'Content-Type':'application/json'});
  
  constructor(private http: HttpClient) { }

  getevent(): Observable<any> {
    return this.http.get(this.baseUrl1);
   
  }
  getconnect(): Observable<any> {
    return this.http.get(this.baseUrl);
   
  }

  getx() : Observable<any> 
  {return this.http.get(this.baseUrlx);}

  gety() : Observable<any> 
  {return this.http.get(this.baseUrly);}

  getz() : Observable<any> 
  {return this.http.get(this.baseUrlz);}




}
