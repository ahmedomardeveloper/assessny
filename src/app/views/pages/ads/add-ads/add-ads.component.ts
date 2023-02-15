import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AdsService } from '../services/ads.service';


@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {
  file: any;
  selectedFile: File;
  adsForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _AdsService: AdsService) {
  }

  addAds() {
    const formData = new FormData();
    formData.append('AdsName', this.adsForm.get('AdsName')?.value);
    formData.append('Content', this.adsForm.get('Content')?.value);
    formData.append('Link', this.adsForm.get('Link')?.value);
    formData.append('YoutubeLink', this.adsForm.get('YoutubeLink')?.value);
    formData.append('File', this.adsForm.get('File')?.value);

    if (this.adsForm.get('IsForTeacher')?.value === "") {
      this.adsForm.get('IsForTeacher')?.setValue("")
    }
    else if (this.adsForm.get('IsForTeacher')?.value === 'false')
      this.adsForm.get('IsForTeacher')?.setValue(false)
    else
      this.adsForm.get('IsForTeacher')?.setValue(true)
    formData.append('IsForTeacher', this.adsForm.get('IsForTeacher')?.value);
    this._AdsService.addAdvertise(formData).subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    })
  }


  ngOnInit(): void {
    this.adsForm = this.formBuilder.group(
      {
        AdsName: new FormControl('', [Validators.required]),
        Content: new FormControl('', [Validators.required]),
        File: [''],
        Link: new FormControl('', [Validators.required]),
        YoutubeLink: new FormControl('', [Validators.required]),
        IsForTeacher: new FormControl('', [Validators.required]),
      }
    )
  }
  onFileSelect($event: any) {
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      this.adsForm.get('File')?.setValue(file);
    }
  }
}
