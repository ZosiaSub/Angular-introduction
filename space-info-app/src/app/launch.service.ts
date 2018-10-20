import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://api.spacexdata.com/v3/launches"

@Injectable({
  providedIn: 'root'
})

export class LaunchService {

  getLatestLaunch(): Observable<any> {
    try {
      return this.http.get(`${baseUrl}/latest`);
    } catch (error) {
      console.error(error);
    }
  }  

  getUpcommingLaunches(): Observable<any> {
    try {
      return this.http.get(`${baseUrl}/upcoming`);
    } catch (error) {
      console.error(error);
    }
  }

constructor(private http: HttpClient) { }

}
