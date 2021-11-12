import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() navs?: string[]
  @Input() linkTemplate?: TemplateRef<any>
}
