import { Component } from '@angular/core';
import { NavController, Content, MenuController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { HomePage } from '../home/home';

// components
@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.component.html'
})

export class EditarContaComponent {

  public user: any = {};
  public user_ = this.afAuth.auth.currentUser;

  // construtor
  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth, private banco: AngularFirestore) {


    let sub = this.banco.collection('usuarios').doc(this.user_.uid).valueChanges()
    .subscribe((usuario) => { 
        this.user = usuario;
        sub.unsubscribe()
     });
     console.log(this.user_);
  }


  // método - editar
  public async edit_usuario(form: NgForm) {
    let nome = form.value.nome;
    let telefone = form.value.telefone;
   
   

    let usuario = {
      nome: nome,
      telefone: telefone
    
    
    }
   
    let user = this.afAuth.auth.currentUser;

    await  this.banco.collection('usuarios').doc(user.uid).update(usuario);
    this.afAuth.auth.updateCurrentUser(this.user_);

    this.navCtrl.setRoot(HomePage);

    
  }
  }
     