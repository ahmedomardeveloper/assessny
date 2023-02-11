import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseUrl: string = "http://assessnyapi-001-site1.atempurl.com/api/";
  constructor(private _HttpClient: HttpClient) { }
  getAllStudents(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'Student/GetAllStudents')
  }
}
