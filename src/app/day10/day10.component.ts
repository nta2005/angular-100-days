import { ToggleComponent } from './../day9/toggle/toggle.component';
import { Component, ElementRef, OnInit, QueryList, VERSION, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.css']
})
export class Day10Component implements OnInit {

  @ViewChild('toggleComp', { static: true }) toggleComp: ToggleComponent | any
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef<HTMLInputElement> | any
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent> | any

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.nameInput.nativeElement.focus()
    }, 3000);
    console.log("onINIT", this.nameInput)
  }

  ngAfterViewInit() {
   // console.log("onAfterINIT", this.toggleComp)
    this.toggleComps.changes.subscribe(console.log)
  }

  name = 'Angular ' + VERSION.major

  isChecked = true
  showLast = true
}
