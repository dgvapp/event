import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.html'
})
export class ForgotpasswordComponent {

  constructor(private alert: AlertController, private navCtrl: NavController, public afAuth: AngularFireAuth) { }

  public resetpassword(form: NgForm) {

    console.log(form.value)

    let email = form.value.email;

     this.afAuth.auth.sendPasswordResetEmail(email);

    const alert = this.alert.create({
      message: 'Solicitação de senha. Verifique seu e-mail',
      buttons: ['OK']
    });
    this.navCtrl.setRoot(LoginPage);
    return alert.present();
  }
  
 public go_loginn(): void {
    this.navCtrl.push(LoginPage);
  }
}