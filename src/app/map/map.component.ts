import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LatLngBounds } from '@agm/core';

import { GeolocationService } from './geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private soundSpeed = 1234.8 * 1000 / 60 / 60; // m/s 20 grader
  private startTime: number;

  lat: number | string;
  lng: number | string;
  zoom: number = 14;
  radius: number = 0;
  subscribtion: Subscription;
  elipsedTime: number;

  constructor(geolocationService: GeolocationService) {
    geolocationService.getLocation().subscribe((data) => {
      this.lat = data.latitude;
      this.lng = data.longitude;
    });
  }

  ngOnInit() {}

  startCounter() {
    this.radius = 0;
    this.elipsedTime = 0;

    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }

    this.startTime = this.getTimeInSeconds();

    const secondsCounter = interval(50);
    this.subscribtion = secondsCounter.subscribe(n => this.calculateRadius());
  }

  stopCounter() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
      this.subscribtion = null;
    }
  }

  calculateRadius() {
    this.elipsedTime = this.getTimeInSeconds() - this.startTime;
    this.radius = this.elipsedTime * this.soundSpeed;
  }

  getTimeInSeconds() {
    return Date.now() / 1000;
  }
}
