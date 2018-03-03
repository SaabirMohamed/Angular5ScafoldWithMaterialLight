import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalModule} from '../../shared/global.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GlobalModule,
    
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
