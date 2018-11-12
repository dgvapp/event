import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuInterface, MenuService } from '../providers';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { HomePage, LoginPage } from '../pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  selectedMenu: any;
  public pages: MenuInterface[];
  public subPages: any;
  public user: any = {};
  rootPage: any = LoginPage;

  constructor(public platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen, private menuService: MenuService, 
    public menuCtrl: MenuController, private afAuth: AngularFireAuth, private menu: MenuController, private banco: AngularFirestore) {
    menu.enable(false, 'myMenu');
    platform.ready().then(() => {    
      statusBar.styleDefault();
      this.pages = menuService.getAll();
      
      afAuth.auth.onAuthStateChanged((user) => {
        if (user != null) {
          let sub = this.banco.collection('usuarios').doc(user.uid).valueChanges().subscribe((usuario) => {
            this.user = usuario;
            sub.unsubscribe()
          });
          this.rootPage = HomePage;
          menu.enable(true, 'myMenu');
        }
        else {
          this.rootPage = LoginPage;
        }
      })
      
      splashScreen.hide();
    });
  }

  public openPage(page): void {
    if (page.component && !page.subPages) {
      this.menuCtrl.close();
      this.nav.setRoot(page.component);
    } else {
      if (this.selectedMenu == page) {
        this.selectedMenu = 0;
      } else {
        this.subPages = page.subPages;
        this.selectedMenu = page;
      }
    }
  }
}

