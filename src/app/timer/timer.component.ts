import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() duration: number;

  @Output() finish = new EventEmitter();

  durationInterval: any;

  constructor() { 
    this.durationInterval = setInterval(() => {
      this.duration = this.duration - 1;
      if (this.duration == 0) {
        this.finish.emit();
      }
    }, 150);
   }

   onStopTimer() {
     clearInterval(this.durationInterval);
   }


  ngOnInit() {
  }

}