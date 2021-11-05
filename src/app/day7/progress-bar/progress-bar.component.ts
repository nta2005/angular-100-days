import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() progress = 50

  //validate property progress use getter/setter
  // private $progress = 50;
  // @Input()
  // get progress(): number {
  //   return this.$progress;
  // }
  // set progress(value: number) {
  //   if (typeof value !== "number") {
  //     const progress = Number(value);
  //     if (Number.isNaN(progress)) {
  //       this.$progress = 0;
  //     } else {
  //       this.$progress = progress;
  //     }
  //   } else {
  //     this.$progress = value;
  //   }
  // }

  @Input() backgroundColor = '#ccc'
  @Input() progressColor = 'tomato'

  constructor() {
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    })
  }


  ngOnInit(): void {
  }

  //validate property progress use ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    if ("progress" in changes) {
      if (typeof changes["progress"].currentValue !== "number") {
        const progress = Number(changes["progress"].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }
}
