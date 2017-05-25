import {Component, ViewChild, ViewChildren} from '@angular/core';
import {SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow} from 'angular2-google-maps/core';
import { WeatherService } from './weather.service';
import { GeocodingGoogleService } from './geocoding-google.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherNOW';
  lat = 6.9680047;
  lng = 79.91952896;
  city = '';
  cityTemp = '';
  weatherImageURL = '';
  weatherText = '';
  temp = '';
  feelsLikeTemp = '';
  error = '';

  @ViewChild(SebmGoogleMapMarker) private marker: SebmGoogleMapMarker; // get the marker from template

  constructor(private weatherService: WeatherService, private geocodingService : GeocodingGoogleService) {
    this.geocodingService.getAddress(this.lat + ',' + this.lng).subscribe(val => {
      if (val.status === 'OK' && val.results.length > 2) {
        let addressList = val.results;
        var city = addressList[addressList.length - 3].address_components[0];
        this.city = city.long_name;
        this.cityTemp = city.long_name;
        this.handleError('Please wait ... Data is being fetched.');
        console.log(city.long_name);
        this.weatherService.getWeather(city.long_name).subscribe(weatherData => this.updateWeatherData(weatherData));
      }
      else{
        this.weatherImageURL = '';
        this.weatherText = '';
        this.temp = '';
        this.feelsLikeTemp = '';
        this.city = '';
        this.error = 'Could not find a close city';
      }
    });
  }

  dragEnded(event): void {
    let latitude =  event.coords.lat;
    let longitude = event.coords.lng;
    this.marker.latitude  = latitude;
    this.lat = latitude;
    this.marker.longitude  = longitude;
    this.lng = longitude;
    this.geocodingService.getAddress(latitude + ',' + longitude).subscribe(val => {
      if (val.status === 'OK' && val.results.length > 2) {
        let addressList = val.results;
        var city = addressList[addressList.length - 3].address_components[0];
        this.city = city.long_name;
        this.handleError('Please wait ... Data is being fetched.');
        console.log(city.long_name);
        this.weatherService.getWeather(city.long_name).subscribe(weatherData =>
          this.updateWeatherData(weatherData), (err) =>
          this.handleError('Could not find weather details for ' + this.city));
      } else {
        this.handleError('Could not find close city');
      }
    });
  }
  updateWeatherData(weatherDataRes): void {
    console.log(weatherDataRes);
    if (typeof weatherDataRes.current !== 'undefined'){
      this.weatherImageURL = weatherDataRes.current.condition.icon;
      this.weatherText = weatherDataRes.current.condition.text;
      this.temp = 'Temperatue' + weatherDataRes.current.temp_c + '';
      this.feelsLikeTemp = 'Feels like' + weatherDataRes.current.feelslike_c + '';
      this.city = this.cityTemp;
      this.error = '';
    } else {
      this.handleError('Could not find weather data for that city');
    }
  }
  handleError(errorMsg): void{
    this.weatherImageURL = '';
    this.weatherText = '';
    this.temp = '';
    this.feelsLikeTemp = '';
    this.city = '';
    this.error = errorMsg;
  }
}
