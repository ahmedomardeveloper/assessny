import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  allStudents: any[] = [];
  constructor(private _StudentsService: StudentsService) { }
  getAllTeachers() {
    this._StudentsService.getAllStudents().subscribe((data) => {

      this.allStudents = data.data;
      console.log(this.allStudents);

    })
  }
  ngOnInit(): void {
    this.getAllTeachers()
  }

}
