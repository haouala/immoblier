import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Annuaire} from './annuaire';
import 'rxjs/add/operator/map';



@Injectable()
export class AnnuaireDataService {

lastId:number=0;

private annuairesAddUrl = 'http://localhost:8081/add_annuaire?';
private annuairesGetUrl = 'http://localhost:8081/list_all_annuaire';
private annuairesGetIDUrl = 'http://localhost:8081/find_annuaire_ByID?id=';
private annuairesUpdateIDUrl = 'http://localhost:8081/update_annuaire_byID?id=';

annuaires:Annuaire[]=[];
 //annnuaire:Observable<Annuaire[]>;

  constructor(private http: Http) { 
  }

  addAnnuaire(annuaire: Annuaire):Promise<Response> {
   
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');

        
      //console.log(annuaire.title);


      return this.http
            .get(this.annuairesAddUrl+"typeProfessionnel="+annuaire.typeProfessionnel+"&nom="+annuaire.nom+"&adresse="+annuaire.adresse+"&num_registre="+annuaire.num_registre+"&description="+annuaire.description+"&tel="+annuaire.tel)
            .toPromise();
  }
 // Simulate GET /todos
 


  getAllAnnuaires(): Promise<Annuaire[]> {


return this.http
      .get(this.annuairesGetUrl)
      .toPromise()
      .then(this.extractData).catch(this.handleError);

      //.toPromise();
  }

 
private extractData(res: Response) {
       if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
           }
       let body = res.json();
       return res.json();
    }

/***********************************/
getAnnuaire(id): Promise<Annuaire> { 
return this.http
      .get(this.annuairesGetIDUrl+id)
      .toPromise()
      .then(this.extractData).catch(this.handleError); 
     // console.log(this.extractData);


   /* return this.getAllAnnuaires()
      .then(annuaires => annuaires.filter(annuaire => annuaire.id === id));*/
  }


     getAnnuaire2(id: number): Promise<Annuaire> {  
    return this.getAllAnnuaires()
      .then(annuaires => annuaires.filter(annuaire => annuaire._id === id));
  }
//**********************************************/
 /* save(annuaire: Annuaire): Promise<Annuaire> {
    if (annuaire._id) {
      return this.put(annuaire);
    }
    return this.post(annuaire);
  }

  private post(annuaire: Annuaire): Promise<Annuaire> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
console.log(annuaire._id);
    return this.http
      .post(this.annuairesGetUrl, JSON.stringify(annuaire), { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }*/

  // Update existing Hero
   put(id:number,annuaire: Annuaire): Promise<Response> {
     let headers = new Headers();
          headers.append('Content-Type', 'application/json');

    /*let url = `${this.annuairesUpdateIDUrl+annuaire._id+"&nom="+annuaire.nom+"&typeProfessionnel="
    +annuaire.typeProfessionnel+"&adresse="+annuaire.adresse+"&description="+annuaire.description+
    "&tel="+annuaire.tel+"&mail="+annuaire.mail}`;
console.log(url);*/
    return this.http
      .get(this.annuairesUpdateIDUrl+id+"&nom="+annuaire.nom+"&typeProfessionnel="
    +annuaire.typeProfessionnel+"&adresse="+annuaire.adresse+"&description="+annuaire.description+
    "&tel="+annuaire.tel+"&mail="+annuaire.mail)
      .toPromise()
      .catch(this.handleError);
  }

 /* extractAnnuaireData(res: Response) {
    let body = res.json();
    let annuaires: Annuaire[] = [];

    for (var item in body){
      let annuaire = body[item];
      let annuaireData: Annuaire = {
        id:annuaire.id,
        typeProfessionnel:annuaire.typeProfessionnel,
        nom: annuaire.nom,
        adresse:annuaire.adresse,
        num_registre:annuaire.num_registre,
        description: annuaire.description,
        tel:annuaire.tel,
        mail:annuaire.mail
       /* profile_image_url: user.profile_image_url,
        created_at: user.created_at,
        followers_count: user.followers_count
    };
      this.annuaires.push(annuaireData);
    }
    return this.annuaires;
  }*/
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }



/* deleteAnnuaireById(id: number): AnnuaireDataService {
    this.annuaires = this.annuaires
      .filter(annuaire => annuaire.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateAnnuaireById(id: number, values: Object = {}): Todo {
    let annuaire = this.getAnnuaireById(id);
    if (!annuaire) {
      return null;
    }
    Object.assign(annuaire, values);
    return annuaire;
  }

 

  // Simulate GET /todos/:id
  getAnnuaireById(id: number): Annuaire {
    return this.annuaires
      .filter(annuaire => annuaire.id === id)
      .pop();
  }
*/
  // Toggle todo complete
 /* toggleTodoComplete(annuaire: Annuaire){
    let updatedAnnuaire = this.updateAnnuaireById(annuaire.id, {
      complete: !annuaire.complete
    });
    return updatedTodo;

}*/

}
