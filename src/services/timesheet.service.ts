import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  baseurl:any='https://localhost:44336/api/';
  constructor(private http:HttpClient) { }

  getTimeSheet():Observable<any>{
    const headers= new HttpHeaders();
    //headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
      return this.http.get<any>(this.baseurl+"PersonTimeSheet/getEmpTimeSheet",{headers:headers});
  }
  getPersonsList():Observable<any>{
    const headers= new HttpHeaders();
    //headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
      return this.http.get<any>(this.baseurl+"PersonTimeSheet/getPersonsList",{headers:headers});
  }
  saveTime(data)
  {
    const headers= new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseurl+"PersonTimeSheet/savePersonTimeSheet",data)
  } 
}
