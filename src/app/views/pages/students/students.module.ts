import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllStudentsComponent } from './all-students/all-students.component';
import { StudentsComponent } from './students.component';
const studentRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-students',
        pathMatch: 'full'
      },
      {
        path: 'all-students',
        component: AllStudentsComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    StudentsComponent,
    AllStudentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes),
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentsModule { }
