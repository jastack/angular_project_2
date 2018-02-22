import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<{num: number}>();
  increment = 0;
  interval;
  lastNumber = 0;

  constructor() { }

  ref = setInterval(() => {
    this.increment += 1;
  }, 1000);

  onStart() {
    this.interval = setInterval(() => {
    this.gameStart.emit({num: this.lastNumber + 1});
    this.lastNumber += 1;
    }, 1000);
  }

  onEnd() {
    clearInterval(this.ref);
  }

  ngOnInit() {
  }

}
