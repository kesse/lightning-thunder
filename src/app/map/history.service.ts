import { Injectable } from '@angular/core';
import { LightningModel } from '../models/lightning.model';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private storageKey: 'history';
  private history: LightningModel[];
  private storage: StorageService;

  constructor(storageService: StorageService) {
    this.storage = storageService;

    const data = this.storage.get(this.storageKey);

    if (data) {
      this.history = data.map(d => {
        return new LightningModel(d);
      });
    } else {
      this.history = [];
    }
  }

  /**
   * save
   */
  public save(model: LightningModel) {
    this.history.push(model);
    this.storage.save(this.storageKey, this.history);

    return this.history;
  }

  public remove(model: LightningModel) {
    this.history = this.removeFromArray(this.history, model);
    this.storage.save(this.storageKey, this.history);

    return this.history;
  }

  /**
   * get
   */
  public get() {
    return this.history;
  }

  private removeFromArray(array, element) {
    return array.filter(e => e !== element);
  }

}
