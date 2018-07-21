import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { GeolocationService } from './geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number | string = 1;
  lng: number | string = 1;
  zoom: number = 12;
  radius: number = 1;
  subscribtion: Subscription;

  constructor(geolocationService: GeolocationService) {
    geolocationService.getLocation().subscribe((data) => {
      this.lat = data.latitude;
      this.lng = data.longitude;
    });
  }

  ngOnInit() {

  }

  startCounter() {
    this.radius = 1;

    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }

    const secondsCounter = interval(1);
    this.subscribtion = secondsCounter.subscribe(n => this.radius++);
  }

  stopCounter() {
    this.subscribtion.unsubscribe();
  }

}
