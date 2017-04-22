import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Annuaire } from './annuaire';
import { AnnuaireDataService } from './annuaire-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-annuaires',
  templateUrl: 'annuaires.component.html',
  styleUrls: ['annuaires.component.css','./assets/bootstrap/css/bootstrap.css','./assets/css/bootstrap-select.min.css',
  './assets/css/jquery.mCustomScrollbar.css','./assets/css/owl.carousel.css','./assets/css/style.css',
  './assets/css/user.style.css']
})
export class AnnuairesComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
   newAnnuaire: Annuaire = new Annuaire();
    annuaires:Annuaire[];
    selectedAnnuaire:Annuaire;
    addingAnnuaire = false;
    error: any;

  constructor( private router: Router, private annuaireDataService: AnnuaireDataService) {
  }

   hack(val) {

    console.log('Before:');
  console.log(val);
  val = Array.from(val);
  console.log('After:');
  console.log(val);
  return val;
}
addAnnuaire() {
    this.annuaireDataService.addAnnuaire(this.newAnnuaire);
    this.newAnnuaire = new Annuaire();
  }
 /* toggleAnnuaireComplete(todo) {
    this.annuaireDataService.toggleAnnuaireComplete(todo);
  }

  removeAnnuaire(todo) {
    this.annuaireDataService.deleteAnnuaireById(todo.id);
  }
*/
 getAnnuaires(): void {
    this.annuaireDataService
      .getAllAnnuaires()
      .then(annuaires => this.annuaires = annuaires).catch(error => this.error = error);
      console.log(this.annuaires);
    }
      /*.catch(error => this.error = error)*/
 /* get Annuaires() {
   // this.annuaires=this.annuaireDataService.getAllAnnuaires();

    return this.annuaireDataService.getAllAnnuaires();
  }*/
   ngOnInit():void {
    console.log(this.annuaireDataService.getAllAnnuaires() /*.subscribe(
         annuaires => this.annuaires = annuaires)*/);
    this.annuaireDataService.getAllAnnuaires()
      /*.subscribe(
         annuaires => this.annuaires = annuaires)*/;
  }

   onSelect(annuaire: Annuaire): void {
    this.selectedAnnuaire = annuaire;
    console.log(annuaire._id+"***");
    this.addingAnnuaire = false;
  }

  gotoDetail(): void {
    console.log(this.selectedAnnuaire._id+"***");
    this.router.navigate(['/detail', this.selectedAnnuaire._id]);
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
