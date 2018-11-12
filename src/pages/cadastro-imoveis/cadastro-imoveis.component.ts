import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { NgForm } from '@angular/forms'; // 1º
import { AngularFireAuth } from '@angular/fire/auth'; // 
import { AlertController } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore'; // 

@Component({
  selector: 'app-cadastro-imoveis',
  templateUrl: './cadastro-imoveis.component.html'
})
export class CadastroImoveisComponent {
public user = this.afAuth.auth.currentUser;

  constructor(public alertCtrl: AlertController, private navCtrl: NavController, private afAuth: AngularFireAuth, private banco: AngularFirestore) { }

  public async cadastro_publicacao(form: NgForm) {

    let publicacao = {
      endereco: form.value.endereco,
      dataPublicacao: new Date().toISOString(),
      descricao: form.value.descricao,
      tipo_imovel: form.value.tipo_imovel,
      usuario_id: this.user.uid,
      valor: form.value.valor,
      cidade: form.value.cidade
    }
    this.banco.collection('evento').add(publicacao).then((ref) => {
        let id = ref.id;
        this.banco.collection('evento').doc(id).update({id:id});
        this.navCtrl.pop();
    })  
  }

}