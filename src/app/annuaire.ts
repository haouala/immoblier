export class Annuaire {

	_id: number;
	typeProfessionnel:  string='';
	nom:string ='';
	adresse:string='';
	num_registre:string='';
	description:string='';
	tel:string='';
	mail:string='';
	/*nbr_vue:number;
	nbr_favoris:number;
*/
	constructor(values:Object={}){
		Object.assign(this,values);
		/*constructor(id:number,typeProfessionnel:  string, nom:string ,adresse:string,
			 num_registre:string,  description:string, tel:string,public mail:string){}*/
	}
/*
	 static withJSON(json: any): Annuaire {

        // integrity check
        if (!json || !json.id) { return undefined; }

       var _id = json.id;
       var nom = json.nom;
       var description = json.description;
       var typeProfessionnel = json.typeProfessionnel;
       var adresse = json.adresse;
       var num_registre = json.num_registre;
       var tel = json.tel;
       var mail = json.mail;

       // create user object
       let annuaire= new Annuaire(/*id, nom, description,typeProfessionnel,adresse,num_registre,tel,mail);
       annuaire.id=id;
       annuaire.nom = nom;
       annuaire.description=description;
       annuaire.typeProfessionnel=typeProfessionnel;
       annuaire.adresse=adresse;
       annuaire.num_registre=num_registre;
       annuaire.tel=tel;
       annuaire.mail=mail;

       return annuaire;
   }*/

}
