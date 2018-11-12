import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MenuInterface, MenuService, DataBase } from '../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: Observable<any[]>;

  constructor(public navCtrl: NavController, public banco: DataBase) {
    this.items = banco.getAllLocations();
  }

  public go_locationpage(id): void {
    // this.navCtrl.push(LocationpageComponent, { id: id });
  }
  public go_cadastroimoveis(): void {
    // this.navCtrl.push(CadastroImoveisComponent);
  }

  public doRefresh(refresher): void {
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  public doInfinite(infiniteScroll): void {
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  openPage() {
    // this.navCtrl.push(FiltersComponent);
  }

}
