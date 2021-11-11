import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() checked: boolean = false
  @Output() checkedChange = new EventEmitter<boolean>()

  toggle() {
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
}
