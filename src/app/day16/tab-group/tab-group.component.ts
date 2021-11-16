import { TabPanelComponent } from './../tab-panel/tab-panel.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabPanelList: TabPanelComponent[] = []
  @Input() activeIndex = 0
  @Output() activeIndexChange = new EventEmitter<number>()

  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab]
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index
        return false
      }
      return true
    })
    if (found === this.activeIndex) {
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found - 1 : found)
    }
  }
}
