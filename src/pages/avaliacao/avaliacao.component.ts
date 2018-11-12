import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { LocationpageComponent, EditarImoveisComponent } from '..';


import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html'
})
export class AvaliacaoComponent {

  @ViewChild(Content) content: Content;

  public items: Observable<any[]>;
  public user = this.afAuth.auth.currentUser;

  constructor(public navCtrl: NavController, private banco: AngularFirestore, private afAuth: AngularFireAuth) 
  {
    this.items = banco.collection<any>('evento', ref => ref.where('usuario_id', '==', this.user.uid)).valueChanges();
  }

  public unFavorite(id): void {
    this.banco.collection('evento').doc(id).delete();
  }

  public editar(id) {
    this.navCtrl.push(EditarImoveisComponent, {id: id});
  }

 public go_locationpage(id): void {
    this.navCtrl.push(LocationpageComponent, {id: id});
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.items = this.banco.collection<any>('evento').valueChanges();
    }, 500);
  }

  doInfinite(infiniteScroll) {
    console.log('inicio da operação async infiniteScroll');
  }

}