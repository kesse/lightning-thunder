import { Component, OnInit } from '@angular/core';
import { LightningModel } from '../models/lightning.model';
import { HistoryService } from '../map/history.service';

@Component({
  selector: 'app-lightning-list',
  templateUrl: './lightning-list.component.html',
  styleUrls: ['./lightning-list.component.css']
})
export class LightningListComponent implements OnInit {
 
  history: LightningModel[];

  constructor(private historyService: HistoryService) {
    this.history = historyService.get().slice().reverse();
  }

  ngOnInit() {
  }

  remove(model: LightningModel) {
    this.history = this.historyService.remove(model);
  }

}
