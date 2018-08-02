import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { LightningModel } from '../models/lightning.model';

@Component({
  selector: 'app-lightning-list',
  templateUrl: './lightning-list.component.html',
  styleUrls: ['./lightning-list.component.css']
})
export class LightningListComponent implements OnInit {

  history: LightningModel[];

  constructor(storageService: StorageService) {
    const key = 'history';

    const data = storageService.get(key);

    if (data) {
      this.history = data.map(d => {
        return new LightningModel(d);
      });
    }
  }

  ngOnInit() {
  }

}
