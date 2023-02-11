import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.scss'],
})
export class EditAdsComponent implements OnInit {
  id: any;
  singleAd: any;
  getsingleAd = {
    adsId: "",
    adsName: "",
    content: "",
    link: "",
    isForTeacher: ""
  }

  public testForm: FormGroup;

  constructor(
    private _AdsService: AdsService,
    public _ActivatedRoute: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

  }

  getAd(id: number) {
    this._AdsService.getAdvertisement(id).subscribe((result) => {
      let { adsId, adsName, content, link, isForTeacher } = result.data[0];
      this.getsingleAd.adsId = adsId,
        this.getsingleAd.adsName = adsName,
        this.getsingleAd.content = content,
        this.getsingleAd.link = link,
        this.getsingleAd.isForTeacher = isForTeacher
    })
  }

  // showForm(data: any) {

  //   this.formData = data;

  //   this.testForm.patchValue({
  //     AdsId: this.id,

  //     AdsName: data.AdsName,

  //     Content: data.Content,

  //     File: data.File,

  //     Link: data.Link,

  //     YoutubeLink: data.YoutubeLink,

  //     IsForTeacher: data.IsForTeacher,

  //   });

  // }
  // updateAd() {
  // }
  ngOnInit(): void {
    this.getAd(this.id);
    this.testForm = this.fb.group(
      {
        AdsName: new FormControl(this.getsingleAd.adsName, [Validators.required]),
        Content: new FormControl(this.getsingleAd.content, [Validators.required]),
        File: [''],
        Link: new FormControl('', [Validators.required]),
        YoutubeLink: new FormControl('', [Validators.required]),
        IsForTeacher: new FormControl('', [Validators.required]),
      }
    )
  }
}
