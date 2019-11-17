import { Component } from '@angular/core';

import {Student} from '../model/student'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],

})
export class AppComponent  {
  
     /*Eine Liste erstellen, zu der man via Button Werte hinzufügen, 
     oder löschen kann. Für das Löschen wird ein index eingefügt. */ 
    students = [
      new Student("Alpha", "Müller"),
      new Student("Betta", "Muster"),
      new Student("Gamma", "Hansen")
    ];

    onAddStudent() {
      this.students.push(
        new Student("A","B")
      );
    }

    onRemoveStudent(index: number) {
      this.students.splice(index, 1)
    };

    /* Ein Eingabefeld dessen Eingabe in einem Paragraphen ausgegeben
    wird */

    inputValue="";

    onInputChange(inputValue: string){
      this.inputValue = inputValue
    }

    /* Stoppuhr */

    counterRunning = false;
    currentTime = 0;

    counterInterval: any;

    onStartCounter() {
      this.counterRunning=true;
      this.counterInterval = setInterval(() => {
        this.currentTime = this.currentTime + 0.1;
      }, 100);

    }
    onStopCounter() {
      this.counterRunning=false;
      clearInterval(this.counterInterval);
    }
    onRemoveCounter(){
      this.currentTime = 0;
    }

    /*Components*/

  cards = [
    {
      title: "Alpha",
      date: new Date(2020, 1, 1)
    },
    {
      title: "Betta",
      date: new Date(2019, 1, 1)
    },
      ]

      /* Timer */

      timerDuration = 20;

      onTimerFinish() {
        alert("Alpha");
      }

  
}
