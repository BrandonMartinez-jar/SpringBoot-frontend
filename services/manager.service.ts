import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../interfaces/manager';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getWelcome(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/`)
  }

  public getManagers(): Observable<Manager[]>{
    return this.http.get<Manager[]>(`${this.apiUrl}/manager`)
  }
}
