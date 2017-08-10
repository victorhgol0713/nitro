/**
 * Created by cristianolaya on 1/08/17.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { UserService } from './user.service';
declare var jQuery: any;

@Injectable()
export class AuthService {
  userProfile: any;
  auth0 = new auth0.WebAuth({
    clientID: 'nEJKHhgWIrmsLDvKOJf33fmk7NzxRCHh',
    domain: 'kiinitro.auth0.com',
    responseType: 'token id_token',
    audience: 'https://kiinitro.auth0.com/userinfo',
     redirectUri: 'http://localhost:4200',
    // redirectUri: 'http://kiinitro.s3-website-us-west-2.amazonaws.com',
    scope: 'openid profile'
  });

  constructor(public router: Router, public user: UserService) {}

  public login(): void {
    this.auth0.authorize();
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public handleAuthentication(): void {
    var self = this;
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    var self = this;
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    if (this.isAuthenticated()) {
      this.getProfile((err, profile) => {
        profile.session = {exc: 'chest', antiquity: 0, goal: 'lose weight', place: 'house', weight: 0, height: 0};

        this.user.isRegistered(authResult.idTokenPayload.sub).then(function(data) {
          if (!jQuery.isEmptyObject(data)) {
            self.user.data.session = data;
          }

          localStorage.setItem('user_data', JSON.stringify(profile));
          self.user.data = JSON.parse(localStorage['user_data']);

          self.router.navigate(['/register']);
        }).catch((err) => {
          self.router.navigate(['/home']);
        });
      });
    }
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.user.data.picture = '/assets/images/gallery/6s.jpg';
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
