import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';

import { MaterialDesignModule } from './material-design/material-design.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LightningListComponent } from './lightning-list/lightning-list.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    LightningListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCw7t8kSlWx86vnBll6Q5hu5tgiwHWmbIc'
    }),
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  entryComponents: [AboutComponent, LightningListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
