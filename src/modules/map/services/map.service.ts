import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private geoCoder;

  constructor() { }

  public geocodeLocation(location: string): Observable<any> {
    this.geoCoder = new (window as any).google.maps.Geocoder();
    return new Observable((observer) => {
      this.geoCoder({address: location}, (result, status) => {
        if ( status === 'OK' ) {
          const geometry = result[0].geometry.location;
          observer.next({lat: geometry.lat(), lng: geometry.lng()});
        } else {
          observer.error('Location could not be geocoded');
        }
      });
    });
  }

}
