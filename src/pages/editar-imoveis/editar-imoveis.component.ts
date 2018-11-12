import { Component } from '@angular/core';
import { NavController, Content, MenuController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-imoveis',
  templateUrl: './editar-imoveis.component.html'
})
export class EditarImoveisComponent {

  public evento: any = {};
  public id = this.navParams.get('id');

  constructor(public navCtrl: NavController, private navParams: NavParams, private banco: AngularFirestore, private afAuth: AngularFireAuth) { 
    let sub = this.banco.collection('evento').doc(this.id).valueChanges().subscribe((event) => {
      this.evento = event;
      sub.unsubscribe()
    });
  }

  public async update(form: NgForm) {

    let publicacao = {
      endereco: form.value.endereco,
      dataPublicacao: new Date().toISOString(),
      descricao: form.value.descricao,
      tipo_imovel: form.value.tipo_imovel,
      valor: form.value.valor,
      cidade: form.value.cidade
    }
    this.banco.collection('evento').doc(this.id).update(publicacao);
    this.navCtrl.pop();
  }

}