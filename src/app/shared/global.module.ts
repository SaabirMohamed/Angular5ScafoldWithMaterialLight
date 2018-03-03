
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { FstoreService } from './fstore.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AlertModule,
    TabsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.config, 'mahadeeni'),,
    AngularFirestoreModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule
  ],
  providers: [FstoreService],
  exports: [AngularFontAwesomeModule,
            AlertModule,
            TabsModule,
            ReactiveFormsModule,
            AngularFireModule,
            AngularFirestoreModule,
            AngularFireAuthModule,
            AngularFireStorageModule]
})
export class GlobalModule {
 
}