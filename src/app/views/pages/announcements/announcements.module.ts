import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AllAnnouncementsComponent } from './all-announcements/all-announcements.component';
import { RouterModule, Routes } from '@angular/router';
import { AdsModule } from '../ads/ads.module';
import { SpinnerAnnounceComponent } from './spinner-announce/spinner-announce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-announcements',
        pathMatch: 'full'
      },
      {
        path: 'all-announcements',
        component: AllAnnouncementsComponent,
      },
      // {
      //   path: 'all-ads/:id',
      //   component: SingleAdsComponent,
      // },
      // {
      //   path: 'edit-ad/:id',
      //   component: EditAdsComponent,
      // },
      {
        path: 'add-announcement',
        component: AddAnnouncementComponent,
      },
      // {
      //   path: 'edit-ads',
      //   component: EditAdsComponent,
      // },

    ]
  }
]

@NgModule({
  declarations: [
    AnnouncementsComponent,
    AddAnnouncementComponent,
    AllAnnouncementsComponent,
    SpinnerAnnounceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class AnnouncementsModule { }
