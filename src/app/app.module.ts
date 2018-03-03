import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GlobalModule} from './shared/global.module'

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
