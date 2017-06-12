import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-myWin',
  templateUrl: 'myWin.html'
})
export class MyWinPage {

  constructor(private modal: ModalController) {

  }

  openTrophy(){
    const myData = {
      name: 'Mon premier trophée',
      point: 1,
      description: 'Bienvenu dans notre application ! Pour vous encourager dans votre programme connectén nous vous offrons votre premier Trophée ! Bon courage pour la suite !',
      image: '../../assets/img/trophies/trophy.png'
    }
    const myTrophy = this.modal.create('TrophyPage', { data: myData });
    myTrophy.present();
  }

}
