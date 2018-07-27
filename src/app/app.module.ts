import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LightningListComponent } from './lightning-list/lightning-list.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: LightningListComponent
  },
  {
    path: '',
    component: MapComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    LightningListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSBv5xhW5-1log6inckfprlP9LeyPkKYQ'
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
