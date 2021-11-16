import { TabGroupComponent } from './../tab-group/tab-group.component';
import { Component, Input, OnInit, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { TabContentDirective } from '../tab-content.directive';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  @Input() title?: string
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown> | any
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef }) explicitBody: TemplateRef<unknown> | any

  constructor(private tabGroup: TabGroupComponent) { }

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody
  }

  ngOnInit(): void {
    this.tabGroup.addTab(this)
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this)
  }
}
