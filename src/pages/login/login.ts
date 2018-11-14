import { Component, ViewChild } from '@angular/core';
import { NavController, Content, MenuController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

import { HomePage } from '..';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController, public afAuth: AngularFireAuth, private menu: MenuController) {
    afAuth.auth.signOut();
    menu.enable(false, 'myMenu')
  }

  public login(form: NgForm): void {

    let email = form.value.email;
    let senha = form.value.senha;

    // let email = "vini@email.com";
    // let senha = "123123";

    console.log(email, senha);

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((result) => {
        console.log(result.user.displayName);
      }).catch((error) => { 
        alert(error); 
      });
  }

  public registrar(): void {
    this.navCtrl.push(CadastroUsuarioComponent);
  }
  public sair(): void {
    this.navCtrl.setRoot(LoginPage);
    this.afAuth.auth.signOut();
  }
  public forgotpassword(): void {
    this.navCtrl.push(ForgotpasswordComponent);
  }
  public go_locationpages(): void {
    this.navCtrl.setRoot(HomePage);
  }

}
