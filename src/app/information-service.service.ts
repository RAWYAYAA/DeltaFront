import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Information} from "./information";


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private apiUrl = 'http://localhost:8082'; // Change this URL to match your backend server URL

  constructor(private http: HttpClient) {}

  saveInformation(information: Information): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/informations`, information);
  }

  getInformationList(filename: string): Observable<Information[]> {
    return this.http.get<Information[]>(`${this.apiUrl}/informations/listInfo/${filename}`);
  }
}
