import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, Content } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { MenuInterface, MenuService, DataBase } from '../providers';

import { MyApp } from './app.component';
import { HomePage, LoginPage } from '../pages';

const config = {
  apiKey: "AIzaSyAYAzVAqyPVGiNI93zBrhMIBMksMPhrqeU",
  authDomain: "event-229bb.firebaseapp.com",
  databaseURL: "https://event-229bb.firebaseio.com",
  projectId: "event-229bb",
  storageBucket: "event-229bb.appspot.com",
  messagingSenderId: "925997990578"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, MenuService, DataBase
  ]
})
export class AppModule {}
