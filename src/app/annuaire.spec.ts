import {Annuaire} from './annuaire';

describe('Annuaire', () => {
  it('should create an instance', () => {
    expect(new Annuaire()).toBeTruthy();
  });

  it('shouldaccept values in the constructor',()=>{
  	let annuaire=new Annuaire({
  		typeProfessonnel:'assurance',
  		nom:'comar',
  		adresse:'tunis',
  		num_registre:'1545654',
  		description:'first test',
  		tel:'71554466',
  		mail:'comar@comar.tn'

  	});
  	expect(annuaire.typeProfessonnel).toEqual('assurance');
  	expect(annuaire.nom).toEqual('comar');
  	expect(annuaire.adresse).toEqual('tunis');
  	expect(annuaire.num_registre).toEqual('1545654');
  	expect(annuaire.description).toEqual('first test');
  	expect(annuaire.tel).toEqual('71554466');
  	expect(annuaire.mail).toEqual('comar@comar.tn');

  });
});
