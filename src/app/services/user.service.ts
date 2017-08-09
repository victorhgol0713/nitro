import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8000';
  public data = {
    picture: '/assets/images/gallery/6s.jpg'
  };
  constructor(private http: Http) { };

  private getUserData(){
    let url = this.baseUrl + '/domainUser';
    let params: URLSearchParams = new URLSearchParams();

    params.set('domain', domain);

    return this.http.get(url, { params: params })
      .toPromise()
      .then(this.extractData)
      .then(response => response);
  };

  isRegistered(string: userID){
    return true;
  };

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  };
}
