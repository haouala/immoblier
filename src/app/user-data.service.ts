import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {User} from './User';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService{

private loginUrl = 'http://localhost:8081/login';
constructor(private http: Http) { 
  }
 login(mail,password): Promise<User> {

return this.http
      .get(this.loginUrl+"?nom="+mail+"&prenom="+password)
      .toPromise()
      .then(this.extractData).catch(this.handleError);

      //.toPromise();
  }
  private extractData(res: Response) {
       if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
           }
            console.log(res.json());
       return res.json();
    }


    private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }





}