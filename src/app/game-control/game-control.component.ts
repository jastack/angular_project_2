import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  increment = 0;
  constructor() { }

  ref = setInterval(() => {
    console.log(this.increment);
    this.increment += 1;
  }, 1000);

  onStart() {
    this.increment = 0;
    clearInterval(this.ref);
    this.ref = setInterval(() => {
      console.log(this.increment);
      this.increment += 1;
    }, 1000);
  }

  onEnd() {
    clearInterval(this.ref);
  }

  ngOnInit() {
  }

}
