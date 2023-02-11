import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {
  url: string
  objData: any;
  allAdsData: any[] = []
  constructor(private _AdsService: AdsService, private _Router: Router) { }
  forWhom: any = null;
  loading: boolean = false;
  getAllAdvertisement(forWhom: any) {

    this._AdsService.getAllAdvertisement(forWhom).subscribe((data) => {
      this.loading = true
      this.objData = data;
      this.allAdsData = this.objData.data;
      this.loading = false
    }
    )
  }


  filterAds(event: any) {
    let value = event.target.value;
    if (value !== "null") {
      this.loading = true;
      this.getAllAdvertisement(value);
      return
    } else {

      this.loading = true
      this.getAllAdvertisement(null);
      this.loading = true
    }
  }
  deleteAds(id: any) {
    this._AdsService.deleteAdvertisement(id).subscribe((res) => {
      console.log(res);
      window.location.reload()
    })



  }

  // ViewuserDetail(id: any) {

  //   // this._Router.navigate([this._Router.url + '/', id])
  // }
  ngOnInit(): void {
    this.loading = true
    this.getAllAdvertisement(this.forWhom)
  }

}
