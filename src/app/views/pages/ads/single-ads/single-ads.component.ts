import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-single-ads',
  templateUrl: './single-ads.component.html',
  styleUrls: ['./single-ads.component.scss']
})
export class SingleAdsComponent implements OnInit {
  id: any;
  singleAd: any;
  constructor(public _ActivatedRoute: ActivatedRoute, private _AdsService: AdsService, private _Router: Router) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');


  }

  // goExternal(link: any) {
  //   this._Router.navigate(["/"]).then(result => { window.location.href = link; });



  // }
  forWhom: string;
  ngOnInit(): void {
    this._AdsService.getAdvertisement(this.id).subscribe((res) => {
      this.singleAd = res.data
      // console.log(this.singleAd);
      if (res.data[0].isForTeacher == null) {
        this.forWhom = 'for both Students and Teachers'
      } else if (res.data[0].isForTeacher == false) {
        this.forWhom = 'students only'
      } else {
        this.forWhom = 'teachers only'

      }

    }
    )
  }

}
