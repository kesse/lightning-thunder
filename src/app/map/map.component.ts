import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { StorageService } from '../storage.service';

import { GeolocationService } from './geolocation.service';
import { LightningModel, LocationModel } from '../models/lightning.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private soundSpeed = 1234.8 * 1000 / 60 / 60; // m/s 20 grader
  private startTime: number;
  private storageService: StorageService;

  lat: number;
  lng: number;
  zoom: number = 14;
  radius: number = 0;
  subscribtion: Subscription;
  elipsedTime: number;

  constructor(geolocationService: GeolocationService, storageService: StorageService) {
    geolocationService.getLocation().subscribe((data) => {
      this.lat = data.latitude;
      this.lng = data.longitude;
    });

    this.storageService = storageService;
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

      const model = new LightningModel();
      model.time = this.elipsedTime;
      model.distance = this.radius;
      model.date = Date.now();
      model.location = new LocationModel();
      model.location.lat = this.lat;
      model.location.lng = this.lng;

      const key = 'history';
      const data = [];

      data.push(model);
      this.storageService.save(key, data);
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
