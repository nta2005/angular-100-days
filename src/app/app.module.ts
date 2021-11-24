import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { ProgressBarComponent } from './day7/progress-bar/progress-bar.component';
import { Day8Component } from './day8/day8.component';
import { AuthorListComponent } from './day8/authors/author-list/author-list.component';
import { AuthorDetailComponent } from './day8/authors/author-detail/author-detail.component';
import { Day9Component } from './day9/day9.component';
import { ToggleComponent } from './toggle/toggle.component';
import { Day10Component } from './day10/day10.component';
import { Day11Component } from './day11/day11.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Day12Component } from './day12/day12.component';
import { Day13Component } from './day13/day13.component';
import { Day14Component } from './day14/day14.component';
import { TabsComponent } from './day14/tabs/tabs.component';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group/tab-bs-group.component';
import { Day17Component } from './day17/day17.component';
import { CounterComponent } from './day17/counter/counter.component';
import { TabContentDirective } from './tabs/tab-content.directive';
import { Day18Component } from './day18/day18.component';
import { FormatAddressPipe } from './day18/format-address.pipe';
import { AdultPipe } from './day18/adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    ProgressBarComponent, //component in day7
    Day8Component,
    AuthorListComponent, //component in day8
    AuthorDetailComponent, //component in day8
    Day9Component,
    ToggleComponent,
    Day10Component,
    Day11Component,
    Day12Component,
    Day13Component,
    Day14Component,
    TabsComponent,
    Day15Component,
    Day16Component,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    Day17Component,
    CounterComponent,
    TabContentDirective,
    Day18Component,
    FormatAddressPipe,
    AdultPipe
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
