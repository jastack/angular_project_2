import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements = [];
  evenElements = [];

  onGameStart(gameData: {num: number}) {
    console.log('Current number: ' + gameData.num);
    if (gameData.num % 2 === 0){
      this.evenElements.push(gameData.num);
    } else {
      this.oddElements.push(gameData.num);
    }
  }
}
