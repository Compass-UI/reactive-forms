import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core'; /** Enable production mode */



import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTripsComponent } from './search-trips/search-trips.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchTripsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

enableProdMode();
