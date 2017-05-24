import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {WeatherService} from './weather.service';
import {GeocodingGoogleService} from './geocoding-google.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTUlH_sP3A_I_i8j3bvIxA_DExoQwwXxY'
    })
  ],
  providers: [WeatherService, GeocodingGoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
