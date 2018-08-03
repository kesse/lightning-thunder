import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { GeolocationService } from './geolocation.service';
import { LightningModel, LocationModel } from '../models/lightning.model';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  private soundSpeed = 1234.8 * 1000 / 60 / 60; // m/s 20 grader
  private startTime: number;
  private geolocationSubscription: Subscription;

  lat: number;
  lng: number;
  zoom = 14;
  radius = 0;
  subscribtion: Subscription;
  elipsedTime: number;

  constructor(private geolocationService: GeolocationService, private historyService: HistoryService) {}

  ngOnInit() {
    this.geolocationSubscription = this.geolocationService.getLocation().subscribe((data) => {
      this.lat = data.latitude;
      this.lng = data.longitude;
    });
  }

  ngOnDestroy()	{
    this.geolocationSubscription.unsubscribe();
  }

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

      this.store();
    }
  }

  calculateRadius() {
    this.elipsedTime = this.getTimeInSeconds() - this.startTime;
    this.radius = this.elipsedTime * this.soundSpeed;
  }

  getTimeInSeconds() {
    return Date.now() / 1000;
  }

  private store() {
    const model = new LightningModel();
    model.time = this.elipsedTime;
    model.distance = this.radius;
    model.date = Date.now();
    model.location = new LocationModel();
    model.location.lat = this.lat;
    model.location.lng = this.lng;

    this.historyService.save(model);
  }
}
