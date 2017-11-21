import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { firebase } from '../firebase';

@Injectable()
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.map(user => {
      if (!user) {
        this.signInAnonymously();
      }
      return !!user;
    });
    this.uid$ = afAuth.authState.map(user => user.uid);
  }

  signIn(provider: firebase.auth.AuthProvider): Promise<any> {
    return this.afAuth.auth.signInWithPopup(provider)
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInAnonymously(): Promise<any> {
    return this.afAuth.auth.signInAnonymously()
      .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
  }

  signInWithGithub(): Promise<any> {
    return this.signIn(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogle(): Promise<any> {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signInWithTwitter(): Promise<any> {
    return this.signIn(new firebase.auth.TwitterAuthProvider());
  }

  signInWithFacebook(): Promise<any> {
    return this.signIn(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
