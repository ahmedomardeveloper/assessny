import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  baseUrl: string = "http://assessnyapi-001-site1.atempurl.com/api/";
  constructor(private _HttpClient: HttpClient) { }
  getAllTeachers(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'Teacher/GetAllTeachers/')
  }
}
