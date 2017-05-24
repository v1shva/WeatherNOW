import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GeocodingGoogleService {
  constructor(private http: Http) { }
  getAddress(latLng: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='
      + latLng + '&key=AIzaSyBTUlH_sP3A_I_i8j3bvIxA_DExoQwwXxY').map((response) => response.json());
  }
// tslint:disable-next-line:eofline
}
