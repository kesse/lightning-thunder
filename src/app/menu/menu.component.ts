import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { LightningListComponent } from '../lightning-list/lightning-list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAboutDialog(): void {
    this.dialog.open(AboutComponent, {});
  }

  openHistoryDialog(): void {
    this.dialog.open(LightningListComponent, {
      minWidth: '60vw'
    });
  }
}
