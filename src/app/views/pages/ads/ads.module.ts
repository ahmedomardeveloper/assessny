import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { AllAdsComponent } from './all-ads/all-ads.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { SingleAdsComponent } from './single-ads/single-ads.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: AdsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-ads',
        pathMatch: 'full'
      },
      {
        path: 'all-ads',
        component: AllAdsComponent,
      },
      {
        path: 'all-ads/:id',
        component: SingleAdsComponent,
      },
      {
        path: 'edit-ad/:id',
        component: EditAdsComponent,
      },
      {
        path: 'add-ads',
        component: AddAdsComponent,
      },
      {
        path: 'edit-ads',
        component: EditAdsComponent,
      },

    ]
  }
]

@NgModule({
  declarations: [
    AdsComponent,
    AddAdsComponent,
    AllAdsComponent,
    EditAdsComponent,
    SingleAdsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,


  ]
})
export class AdsModule { }
