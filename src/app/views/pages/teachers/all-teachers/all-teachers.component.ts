import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.scss']
})
export class AllTeachersComponent implements OnInit {
  allTeachers: any[] = [];
  constructor(private _TeachersService: TeachersService) { }
  getAllTeachers() {
    this._TeachersService.getAllTeachers().subscribe((data) => {

      this.allTeachers = data.data;
      console.log(this.allTeachers);

    })
  }
  ngOnInit(): void {
    this.getAllTeachers()
  }

}
