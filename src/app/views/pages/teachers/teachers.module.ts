import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';

const teacherRoutes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-teachers',
        pathMatch: 'full'
      },
      {
        path: 'all-teachers',
        component: AllTeachersComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    TeachersComponent,
    AllTeachersComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(teacherRoutes),
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TeachersModule { }
