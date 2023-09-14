import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name:string = "Names";
  img:string = "./../assets/name.png";
  valid:number= 3;
  constructor() { }

  ngOnInit(): void {
  }

}
