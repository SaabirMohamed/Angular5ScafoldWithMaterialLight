import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AngularFontAwesomeModule,NgbModule.forRoot()],
  providers: [],
  bootstrap: [],
  exports: [AngularFontAwesomeModule, NgbModule]
})
export class GlobalModule {}