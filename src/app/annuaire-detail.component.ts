import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Annuaire } from './annuaire';
import { AnnuaireDataService } from './annuaire-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-annuaire-detail',
  templateUrl: 'annuaire-detail.component.html',
  styleUrls: ['annuaire-detail.component.css']
})
export class AnnuaireDetailComponent implements OnInit {
  @Input() annuaire: Annuaire;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  updateAnnuaire: Annuaire = new Annuaire();
  constructor(
    private annuaireDataService: AnnuaireDataService,
    private route: ActivatedRoute) {
  }
  /*getAnnuaire(): void {
    this.annuaireDataService
      .getAnnuaire()
      .then(annuaire => this.annuaire = annuaire).catch(error => this.error = error);
      console.log(this.annuaire);
    }*/

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
              this.navigated = true;

      let id = params['id'];
      this.annuaireDataService.getAnnuaire(id).then(annuaire => this.annuaire = annuaire);
     /* if (params['id'] !== undefined) {
        let id = params['id'];
        //console.log(id+"*******");
        this.navigated = true;
        
        this.annuaireDataService.getAnnuaire(id)
            .then(annuaire => this.annuaire = annuaire);
            console.log(this.annuaire);
      } else {
        this.navigated = false;
        this.annuaire = new Annuaire();
      }*/
    });
  }

  save(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
        this.annuaireDataService.put(id,this.updateAnnuaire);
    this.updateAnnuaire = new Annuaire();
    
    });
   
    
  }

  goBack(savedAnnuaire: Annuaire = null): void {
    //this.close.emit(savedAnnuaire);
    if (this.navigated) { window.history.back(); }
  }
}
