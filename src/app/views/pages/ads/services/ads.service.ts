import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdsService {
  baseURL = 'http://assessnyapi-001-site1.atempurl.com/api/';
  forWhom = null;

  constructor(private _HttpClient: HttpClient) { }

  getAllAdvertisement(forWhom: any): Observable<any> {
    if (forWhom)
      return this._HttpClient.get(this.baseURL + `Advertisement/GetAllAdvertisement?isForTeacher=${forWhom}`);
    else if (forWhom == false)
      return this._HttpClient.get(this.baseURL + `Advertisement/GetAllAdvertisement?isForTeacher=${forWhom}`);
    else
      return this._HttpClient.get(this.baseURL + `Advertisement/GetAllAdvertisement`);
  }

  addAdvertise(advertisements: any): Observable<any> {
    return this._HttpClient.post(this.baseURL + 'Advertisement/AddAdvertisement/', advertisements)
  }
  editAdvertise(advertisements: any): Observable<any> {
    return this._HttpClient.put(this.baseURL + 'Advertisement/EditAdvertisement/', advertisements)
  }
  deleteAdvertisement(adID: any): Observable<any> {
    return this._HttpClient.delete(this.baseURL + 'Advertisement/DeleteAdvertisement?adjId=' + adID);
  }

  getAdvertisement(adId: any): Observable<any> {
    return this._HttpClient.get(this.baseURL + `Advertisement/GetAdvertisement?adjId=${adId}`);

  }
}
