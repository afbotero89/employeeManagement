import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/employee.model';
import { AppState } from './../app.state';

// Import our actions at the top
import * as TutorialActions from './../actions/employee.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { 
	this.tutorials = store.select('tutorial');
  }

  // In the class, add:
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {
  }

}
