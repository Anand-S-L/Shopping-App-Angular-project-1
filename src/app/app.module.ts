import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  RouterModule, Routes } from '@angular/router';

const approutes:Routes=[
    {
      path : "",
      component : AddComponent
    },
    {
      path : "search",
      component : SearchComponent
    },
    {
      path : "view",
      component : ViewComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    ViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
