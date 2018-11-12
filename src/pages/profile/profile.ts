import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html'
})
export class ProfilePage {

  @ViewChild(Content) content:Content;

  items = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.items.push(this.items.length);
    }
  }
  
  doRefresh(refresher) {
    console.log('inicio da operação async refresher');

    setTimeout(() => {
      console.log('fim da operação async refresher');
      refresher.complete();
    }, 500);
  }

  doInfinite(infiniteScroll) {
    console.log('inicio da operação async infiniteScroll');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.push(this.items.length);
      }

      console.log('fim da operação async infiniteScroll');
      infiniteScroll.complete();
    }, 500);
  }

}