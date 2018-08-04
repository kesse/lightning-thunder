import { Injectable, Output, EventEmitter } from '@angular/core';
import { LightningModel } from '../models/lightning.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  @Output() change: EventEmitter<LightningModel> = new EventEmitter();

  constructor() { }

  showLocation(model: LightningModel) {
    this.change.emit(model);
  }
}
