import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-userChoice',
  templateUrl: 'userChoice.html'
})
export class UserChoicePage {

   data = [
    {
      nom: 'Choain',
      prenom: 'Pierre-Alexandre',
      items: [
        { title: 'Sexe', note: 'M' },
        { title: 'Taille', note: '174' },
        { title: 'Poids', note: '74' },
        { title: 'Date', note: '09/03/1996'}
      ],
      sexe: 'M',
      taille: 174,
      poids: 74,
      date: '09/03/1996'
    },
    {
      nom: 'Kieffer',
      prenom: 'Sarah',
      items: [
        { title: 'Sexe', note: 'F' },
        { title: 'Taille', note: '168' },
        { title: 'Poids', note: '70' },
        { title: 'Date', note: '16/04/1996'}
      ],
      sexe: 'F',
      taille: 168,
      poids: 70,
      date: '16/04/1996'
    },
    {
      nom: 'Briceno-Aguilera',
      prenom: 'David',
      items: [
        { title: 'Sexe', note: 'M' },
        { title: 'Taille', note: '170' },
        { title: 'Poids', note: '78' },
        { title: 'Date', note: '30/01/1996'}
      ],
      sexe: 'M',
      taille: 170,
      poids: 78,
      date: '30/01/1996'
    }
  ];
  constructor(private modal: ModalController, private nav: NavController) {

  }

  openUsers(data){
    const myUsers = this.modal.create('UsersPage',{vdata:data});
    myUsers.present();
  }

  addUser(){
    const addUser = this.modal.create('AddPage');
    addUser.present();

  }
	
	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HomePage);
  }

	lockbar = 0;

}
