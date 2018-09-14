import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/employee.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'listEmployees', component: ReadComponent },
  { path: 'addNewEmployee',      component: CreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
