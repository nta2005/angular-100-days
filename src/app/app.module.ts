import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    AuthorListComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
