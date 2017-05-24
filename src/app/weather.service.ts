import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WeatherService {
  constructor(private http: Http) { }
  getWeather(city: string) {
    return this.http.get('http://api.apixu.com/v1/current.json?key=8eb79afad62e4d75abb60521172405&q=' + city).map
    ((response) => response.json());
  }
// tslint:disable-next-line:eofline
}
