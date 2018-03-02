import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [],
  exports: [AngularFontAwesomeModule]
})
export class GlobalModule {}