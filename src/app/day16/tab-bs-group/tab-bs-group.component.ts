import { TabGroupComponent } from './../tab-group/tab-group.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrls: ['./tab-bs-group.component.css'],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent
    }
  ]
})
export class TabBsGroupComponent extends TabGroupComponent {

}
