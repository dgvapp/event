import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams, Content } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-locationpage',
  templateUrl: './locationpage.component.html'
})
export class LocationpageComponent {

  evento: any = [];
  proprietario: any = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, private banco: AngularFirestore) {
    let id = navParams.get('id');
    let sub = this.banco.collection('evento').doc(id).valueChanges().subscribe((event) => {
      this.evento = event;
      let contato = this.banco.collection('usuarios').doc(this.evento.usuario_id).valueChanges().subscribe((proprietario) => {
        console.log(proprietario)
        this.proprietario = proprietario;
        sub.unsubscribe()
      });
      sub.unsubscribe()
    });
  }

  public search = {
    dataCadastro: new Date().toISOString()
  }
}