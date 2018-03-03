
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [],
  imports: [AngularFontAwesomeModule, AlertModule, TabsModule],
  providers: [],
  exports: [AngularFontAwesomeModule, AlertModule, TabsModule]
})
export class GlobalModule {}