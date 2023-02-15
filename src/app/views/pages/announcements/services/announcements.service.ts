import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  baseURL = 'http://assessnyapi-001-site1.atempurl.com/api/';
  forWhom = null;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAllAnnouncements(forWhom: any): Observable<any> {
    if (forWhom)
      return this._HttpClient.get(this.baseURL + `Announcement/GetAllAnnouncement?isForTeacher=${forWhom}`);
    else if (forWhom == false)
      return this._HttpClient.get(this.baseURL + `Announcement/GetAllAnnouncement?isForTeacher=${forWhom}`);
    else
      return this._HttpClient.get(this.baseURL + `Announcement/GetAllAnnouncement`);
  }
  addAnnouncement(announcement: any): Observable<any> {
    return this._HttpClient.post("http://assessnyapi-001-site1.atempurl.com/api/Announcement/AddAnnouncement", announcement, this.httpOptions)
  }

  constructor(private _HttpClient: HttpClient) { }
}
