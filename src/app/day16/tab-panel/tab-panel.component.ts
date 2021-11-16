import { TabGroupComponent } from './../tab-group/tab-group.component';
import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  @Input() title?: string
  @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<unknown> | any

  constructor(private tabGroup: TabGroupComponent) { }

  ngOnInit(): void {
    this.tabGroup.addTab(this)
  }

}
