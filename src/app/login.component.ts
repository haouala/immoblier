import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { User } from './user';
import { UserDataService } from './user-data.service';


@Component({
  moduleId: module.id,
  selector: 'login-selector',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent  {
/*  @Input() annuaire: Annuaire;
  @Output() close = new EventEmitter();
*/  
users:User[];
user:User=new User();
  constructor(
    private userDataService: UserDataService,
    private router: Router) {
  }
  
   login(mail,password): void {
//this.users = [];
    this.userDataService
      .login(this.user.nom,this.user.prenom)
      .then(users=> console.log(this.users));
      //console.log(this.users);
      if(this.users!==[])

    this.router.navigate(['/annuaires']);
      }

}