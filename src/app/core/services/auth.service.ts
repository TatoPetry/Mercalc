import { Injectable, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../interfaces/user';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalService } from './local.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {


  user: Observable<User | null>;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _fireStore: AngularFirestore,
    private _route: Router,
    private _localService: LocalService,
    private _ngZone: NgZone
    ) {
    }

  ngOnInit(): void {
    this.user = this._firebaseAuth.authState.pipe(switchMap( user => {
      if (user) {
        return this._fireStore.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return null;
      }
    }));
  }

  isLogged() {
    if (!!this._firebaseAuth.auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  getAuth() {
    return this._firebaseAuth.authState;
  }

  loginGoogle() {

    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then( userData => this.updateUserData(userData.user), err => console.log(err))
      .then( () => this.redirectPrincipal(this._localService.getData('user').uid), err => console.log(err));
  }

  loginFacebook() {

    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
      .then( userData => this.updateUserData(userData.user), err => console.log(err))
      .then( () => this.redirectPrincipal(this._localService.getData('user').uid), err => console.log(err));
  }

  registerEmail(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => resolve(this.updateUserData(userData.user)), err => reject(err))
      .then( () => this.redirectPrincipal(this._localService.getData('user').uid), err => console.log(err));
    });
  }

  loginEmail(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData => resolve(userData), err => reject(err))
      .then( () => this.redirectPrincipal(this._localService.getData('user').uid), err => console.log(err));
    });
  }

  logout() {

    localStorage.removeItem('user');
    return this._firebaseAuth.auth.signOut()
      .then(() => this.redirectLogin(), err => console.log(err));
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this._fireStore.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || '../../../assets/icons/icon-512x512.png'
    };
    localStorage.setItem('user', JSON.stringify(data));
    return userRef.set(data);
  }

  private redirectPrincipal(uid: string) {
    this._ngZone.run(() => this._route.navigateByUrl(`/principal/${uid}`), err => console.log(err));
  }

  private redirectLogin() {
    this._ngZone.run(() => this._route.navigate(['Login']), err => console.log(err));
  }


}
