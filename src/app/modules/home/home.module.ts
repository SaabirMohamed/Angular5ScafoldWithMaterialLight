import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalModule} from '../../shared/global.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
