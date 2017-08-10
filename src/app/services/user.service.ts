import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8000';
  public registerOptions = {
      exc: ['chest', 'back', 'thigh - hip'],
      goals: ['lose weight', 'increase mass', 'to tone'],
      places: ['house', 'gym']
  };
  public data = {
    picture: '/assets/images/gallery/6s.jpg',
    session: {}
  };
  constructor(private http: Http) { };

  private getUser(id: string) {
    let url = this.baseUrl + '/getUser';
    let params: URLSearchParams = new URLSearchParams();

    params.set('id', id);

    return this.http.get(url, { params: params })
      .toPromise()
      .then(this.extractData)
      .then(response => response);
  };

  isRegistered(userID: string) {
    return new Promise((resolve, reject) => {
      this.getUser(userID).then(response => {
        resolve(response);
      }).catch(() => {
        reject();
      });
    });
  };

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  };
}
