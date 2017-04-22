import { Component ,OnInit} from '@angular/core';
import {Annuaire} from './annuaire';
import {AnnuaireDataService} from './annuaire-data.service';
import {Observable} from 'rxjs/Observable';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/annuaires" routerLinkActive="active">Annuaires</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
  
 
})
export class AppComponent {

   title = 'Tour of Annuaires';

}
