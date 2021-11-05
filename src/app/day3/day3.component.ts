import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'title'
  title2 = 'title2'

  user = {
    name: "Thanh An",
    age: 21,
  }

  handler() {
    console.log('Button Clicked');
  }
}
