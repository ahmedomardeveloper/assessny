import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {
  announcementForm = new FormGroup(
    {
      date: new FormControl(new Date(), []),
      content: new FormControl('', []),
      title: new FormControl('', []),
      url: new FormControl('', []),
      isForTeacher: new FormControl('', []),
    }
  );
  addAnnouncement() {
    console.log(JSON.stringify(this.announcementForm.value));
    if (this.announcementForm.controls['isForTeacher']?.value === "true") {
      this.announcementForm.controls['isForTeacher']?.setValue(true)
    }
    else if (this.announcementForm.controls['isForTeacher']?.value === "false")
      this.announcementForm.controls['isForTeacher']?.setValue(false)
    else
      this.announcementForm.controls['isForTeacher']?.setValue(null);
    this._AnnouncementsService.addAnnouncement(JSON.stringify(this.announcementForm.value)).subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    })

  }
  constructor(private _AnnouncementsService: AnnouncementsService) { }

  ngOnInit(): void {
  }

}

