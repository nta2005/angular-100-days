import { Component, OnInit } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-day13',
  templateUrl: './day13.component.html',
  styleUrls: ['./day13.component.css']
})
export class Day13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Thanh An'

  question = {
    question1: true,
    question2: false
  }
}
