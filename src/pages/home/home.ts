import { Component, ViewChild } from '@angular/core';
import { NavController, Content, MenuController } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MenuInterface, MenuService } from '../../providers';

import { FiltersComponent } from '../../pages'
import { CadastroImoveisComponent } from '../cadastro-imoveis/cadastro-imoveis.component';
import { LocationpageComponent } from '../locationpage/locationpage.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  public items: Observable<any[]>;

  constructor(public navCtrl: NavController, private menu: MenuController, private banco: AngularFirestore) {
    this.items = banco.collection<any>('evento').valueChanges();
  }
  public go_locationpage(id): void {
    this.navCtrl.push(LocationpageComponent, { id: id });
  }
  public go_cadastroimoveis(): void {
    this.navCtrl.push(CadastroImoveisComponent);
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  openPage() {
    // this.navCtrl.push(FiltersComponent);
  }

}
