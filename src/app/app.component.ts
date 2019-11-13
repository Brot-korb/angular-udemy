import { Component } from '@angular/core';

import {Student} from '../model/student'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  template: `
  <div> 
    <li *ngFor="let student of students"> {{student.firstname}} {{student.lastname}}

    </li>
  </div>
  `
})
export class AppComponent  {
  
        
    students = [
      new Student("Alpha", "Müller"),
      new Student("Betta", "Muster"),
      new Student("Gamma", "Hansen")
    ];

  
}
