import { Injectable } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class DataBase {

    public getAllLocations(): any {
        return this.banco.collection<any>('evento').valueChanges();
    }

  constructor(public banco: AngularFirestore, public afAuth: AngularFireAuth) { }

}