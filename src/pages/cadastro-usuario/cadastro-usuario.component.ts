import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // 1º
import { AngularFireAuth } from '@angular/fire/auth'; // 
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFirestore } from '@angular/fire/firestore'; // 


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',

})
export class CadastroUsuarioComponent {

  constructor(public alertCtrl: AlertController, private navCtrl: NavController, private afAuth: AngularFireAuth, private banco: AngularFirestore) {
  }

  public async salvar(form: NgForm) { //3

    let usuario = {
      nome: form.value.nome,
      telefone: form.value.telefone,
      favoritos: [],
      dataCadastro: new Date().toISOString(),
      email: form.value.email
    }

    if (form.value.senha === form.value.confsenha) {
      let result = await this.afAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.senha)

        .then((result) => {
          this.banco.collection('usuarios').doc(result.user.uid).set(usuario)
        })

        .catch((error) => {
          alert(error);
        })

    }
    else {
      alert("senhas divergentes");
    }
  }


  // método - termos e condições
  // metodo para voltar para login
  public login(): void {
    this.navCtrl.push(LoginPage);
  }




}


