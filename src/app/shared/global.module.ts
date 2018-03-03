import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AngularFontAwesomeModule,NgbModule.forRoot()],
  providers: [NgbCarouselConfig],
  bootstrap: [],
  exports: [AngularFontAwesomeModule, NgbModule]
})
export class GlobalModule {}