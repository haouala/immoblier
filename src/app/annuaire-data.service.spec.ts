/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnnuaireDataService } from './annuaire-data.service';

import {Annuaire} from './annuaire';


describe('AnnuaireDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnuaireDataService]
    });
  });

  it('should ...', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllAnnuaires()', () => {

    it('should return an empty array by default', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      expect(service.getAllAnnuaires()).toEqual([]);
    }));

    it('should return all annuaires', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire1 = new Annuaire({nom: 'Hello 1', description: 'false'});
      let annuaire2 = new Annuaire({nom: 'Hello 2', description: 'true'});
      service.addAnnuaire(annuaire1);
      service.addAnnuaire(annuaire2);
      expect(service.getAllAnnuaire()).toEqual([annuaire1, annuaire2]);
    }));

  });

  describe('#save(annuaire)', () => {

    it('should automatically assign an incrementing id', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire1 = new Annuaire({nom: 'Hello 1', description: 'false'});
      let annuaire2 = new Annuaire({nom: 'Hello 2', description: 'true'});
      service.addAnnuaire(annuaire1);
      service.addAnnuaire(annuaire2);
    /*  expect(service.getAnnuaireById(1)).toEqual(annuaire1);
      expect(service.getAnnuaireById(2)).toEqual(annuaire2);*/
    }));

  });

 /* describe('#deleteAnnuaireById(id)', () => {

    it('should remove annuaire with the corresponding id', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire1 = new Annuaire({nom: 'Hello 1', description: 'false'});
      let annuaire2 = new Annuaire({nom: 'Hello 2', description: 'true'});
      service.addAnnuaire(annuaire1);
      service.addAnnuaire(annuaire2);
      expect(service.getAllAnnuaires()).toEqual([annuaire1, annuaire2]);
      service.deleteAnnuaireById(1);
      expect(service.getAllAnnuaires()).toEqual([annuaire2]);
      service.deleteAnnuaireById(2);
      expect(service.getAllAnnuaires()).toEqual([]);
    }));

    it('should not removing anything if annuaire with corresponding id is not found', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire1 = new Annuaire({nom: 'Hello 1', description: 'false'});
      let annuaire2 = new Annuaire({nom: 'Hello 2', description: 'true'});
      service.addAnnuaire(annuaire1);
      service.addAnnuaire(annuaire2);
      expect(service.getAllAnnuaires()).toEqual([annuaire1, annuaire2]);
      service.deleteAnnuaireById(3);
      expect(service.getAllAnnuaires()).toEqual([annuaire1, annuaire2]);
    }));

  });

  describe('#updateAnnuaireById(id, values)', () => {

    it('should return annuaire with the corresponding id and updated data', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire = new Annuaire({nom: 'Hello 1', description: 'false'});
      service.addAnnuaire(annuaire);
      let updatedAnnuaire = service.updateAnnuaireById(1, {
        nom: 'new nom'
      });
      expect(updatedAnnuaire.nom).toEqual('new nom');
    }));

    it('should return null if annuaire is not found', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire = new Annuaire({nom: 'Hello 1', description: 'false'});
      service.addAnnuaire(annuaire);
      let updatedAnnuaire = service.updateAnnuaireById(2, {
        nom: 'new nom'
      });
      expect(updatedAnnuaire).toEqual(null);
    }));

  });
*/
 /* describe('#toggleAnnuaireComplete(annuaire)', () => {

    it('should return the updated annuaire with inverse complete status', inject([AnnuaireDataService], (service: AnnuaireDataService) => {
      let annuaire = new Annuaire({nom: 'Hello 1', description: 'false'});
      service.addAnnuaire(annuaire);
      let updatedAnnuaire = service.toggleAnnuaireComplete(annuaire);
      expect(updatedAnnuaire.description).toEqual('true');
      service.toggleAnnuaireComplete(annuaire);
      expect(updatedAnnuaire.description).toEqual('false');
    }));

  });*/


});
