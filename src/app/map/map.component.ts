import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { GeolocationService } from './geolocation.service';
import { LightningModel, LocationModel } from '../models/lightning.model';
import { HistoryService } from './history.service';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  private soundSpeed = 1234.8 * 1000 / 60 / 60; // m/s 20 grader
  private startTime: number;
  private geolocationSubscription: Subscription;

  model: LightningModel;
  zoom = 14;
  streetViewControl = false;
  subscribtion: Subscription;
  currentLocation = new LocationModel();

  constructor(private geolocationService: GeolocationService, private historyService: HistoryService, private mapService: MapService) {}

  ngOnInit() {
    this.model = new LightningModel();
    this.model.location = this.currentLocation;

    this.geolocationSubscription = this.geolocationService.getLocation().subscribe((data) => {
      this.currentLocation.lat = data.latitude;
      this.currentLocation.lng = data.longitude;
    });

    this.mapService.change.subscribe(oldModel => {
      this.model = oldModel;
    });
  }

  ngOnDestroy()	{
    if (this.geolocationSubscription) {
      this.geolocationSubscription.unsubscribe();
    }

    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }

  startCounter() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }

    const oldModel = this.model;
    this.model = new LightningModel();
    this.model.location = new LocationModel(this.currentLocation);

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
    this.model.time = this.getTimeInSeconds() - this.startTime;
    this.model.distance = this.model.time * this.soundSpeed;
  }

  getTimeInSeconds() {
    return Date.now() / 1000;
  }

  private store() {
    const savedModel = this.model;
    savedModel.date = Date.now();

    this.historyService.save(savedModel);
  }
}
