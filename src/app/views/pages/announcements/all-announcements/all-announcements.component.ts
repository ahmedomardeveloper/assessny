import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-announcements',
  templateUrl: './all-announcements.component.html',
  styleUrls: ['./all-announcements.component.scss']
})
export class AllAnnouncementsComponent implements OnInit {
  url: string
  objData: any;
  allAnnouncementsData: any[] = []
  constructor(private _AdsService: AnnouncementsService, private _Router: Router) { }
  forWhom: any = null;
  loading: boolean = false;
  getAllAnnouncements(forWhom: any) {

    this._AdsService.getAllAnnouncements(forWhom).subscribe((data) => {
      this.loading = true
      this.objData = data;
      this.allAnnouncementsData = this.objData.data;
      this.loading = false
    }
    )
  }


  filterAnnouncements(event: any) {
    let value = event.target.value;
    if (value !== "null") {
      this.loading = true;
      this.getAllAnnouncements(value);
      return
    } else {

      this.loading = true
      this.getAllAnnouncements(null);
      this.loading = true
    }
  }
  // deleteAds(id: any) {
  //   this._AdsService.deleteAdvertisement(id).subscribe((res) => {
  //     console.log(res);
  //     window.location.reload()
  //   })
  // }

  ngOnInit(): void {
    this.loading = true
    this.getAllAnnouncements(this.forWhom)
  }

}
