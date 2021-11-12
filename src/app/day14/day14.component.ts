import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day14',
  templateUrl: './day14.component.html',
  styleUrls: ['./day14.component.css']
})
export class Day14Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 1
  navs = ['Active', 'Link 1', 'Link 2']
}
