import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, Content } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { MenuInterface, MenuService} from '../providers';

import { MyApp } from './app.component';

import { HomePage, LoginPage, ProfilePage, FiltersComponent, EditarImoveisComponent, EditarContaComponent } from '../pages';
import {LocationpageComponent } from '../pages/locationpage/locationpage.component';
import { CadastroUsuarioComponent } from '../pages/cadastro-usuario/cadastro-usuario.component';
import { ForgotpasswordComponent } from '../pages/forgotpassword/forgotpassword.component';
import {CadastroImoveisComponent} from '../pages/cadastro-imoveis/cadastro-imoveis.component';
import {AvaliacaoComponent} from '../pages/avaliacao/avaliacao.component';

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
    LoginPage,
    ProfilePage,
    FiltersComponent,
    LocationpageComponent,
    CadastroUsuarioComponent,
    ForgotpasswordComponent,
    CadastroImoveisComponent,
    AvaliacaoComponent,
    EditarImoveisComponent,
    EditarContaComponent
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
    LoginPage,
    ProfilePage,
    FiltersComponent,
    LocationpageComponent,
    CadastroUsuarioComponent,
    ForgotpasswordComponent,
    CadastroImoveisComponent,
    AvaliacaoComponent,
    EditarImoveisComponent,
    EditarContaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, MenuService
  ]
})
export class AppModule {}
