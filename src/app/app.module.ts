import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';

import { MaterialDesignModule } from './material-design/material-design.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LightningListComponent } from './lightning-list/lightning-list.component';
import { AboutComponent } from './about/about.component';

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
    LightningListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCw7t8kSlWx86vnBll6Q5hu5tgiwHWmbIc'
    }),
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  entryComponents: [AboutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
