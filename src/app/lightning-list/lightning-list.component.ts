import { Component, OnInit } from '@angular/core';
import { LightningModel } from '../models/lightning.model';
import { HistoryService } from '../map/history.service';
import { MapService } from '../map/map.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lightning-list',
  templateUrl: './lightning-list.component.html',
  styleUrls: ['./lightning-list.component.css']
})
export class LightningListComponent implements OnInit {

  history: LightningModel[];

  constructor(private historyService: HistoryService, private mapService: MapService,
    private dialogRef: MatDialogRef<LightningListComponent>) {}

  ngOnInit() {
    this.history = this.historyService.get().slice().reverse();
  }

  showOnMap(model: LightningModel) {
    this.mapService.showLocation(model);
    this.dialogRef.close();
  }

  remove(model: LightningModel) {
    this.history = this.historyService.remove(model);
  }

  clearAll() {
    this.history = this.historyService.clear();
  }

}
