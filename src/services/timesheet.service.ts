import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  baseurl:any='https://localhost:44336/api/';
  constructor(private http:HttpClient) { }

  getTimeSheet():Observable<any>{
    return this.http.get<any>(this.baseurl+"PersonTimeSheet/getEmpTimeSheet");
  }
  getPersonsList():Observable<any>{
    return this.http.get<any>(this.baseurl+"PersonTimeSheet/getPersonsList");
  }
  saveTime(data:any):Observable<any>
  {
    return this.http.post(this.baseurl+"PersonTimeSheet/savePersonTimeSheet", data);
  } 
}
