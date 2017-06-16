import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-myWin',
  templateUrl: 'myWin.html'
})
export class MyWinPage {

  data = [
    {
      name: 'Mes premiers pas...',
      points: 1,
      description: 'Bienvenue dans notre application ! Pour vous encourager dans votre programme connecté nous vous offrons votre premier Trophée ! Bon courage pour la suite !',
      pas: 0,
      distance: 0,
      unlocked: true,
      image: 'assets/img/trophies/premier.png',
      image256: 'assets/img/trophies/premier1.png'
    },
    {
      name: 'C\'était pas si dur !',
      points: 15,
      description: 'Bravo pour vos 1 000 pas atteints ! Continuez ainsi pour atteindre vos futures objectifs ! ',
      pas: 1000,
      distance: 0,
      unlocked: false,
      image: 'assets/img/trophies/1000.png',
      image256: 'assets/img/trophies/1000_256.png'
    },
    {
      name: '1 kilomètre à pied...',
      points: 15,
      description: 'Félicitation pour ce 1er kilomètre qui est seulement le début de votre ascension avec S-Fit !',
      pas: 0,
      distance: 100000,
      unlocked: false,
      image: 'assets/img/trophies/1km.png',
      image256: 'assets/img/trophies/1km_256.png'
    },
    {
      name: 'Pas mal !',
      points: 30,
      description: 'Excellent pour vos 10 000 pas avec S-Fit  ! Continuez votre programme d\'entrainement pour rester en forme.',
      pas: 10000,
      distance: 0,
      unlocked: false,
      image: 'assets/img/trophies/10000.png',
      image256: 'assets/img/trophies/10000_256.png'
    },
    {
      name: 'Ça use les souliers',
      points: 30,
      description: 'A force de marcher, vous réalisez des distances incroyables. Bientôt un nombre à 3 chiffres.',
      pas: 0,
      distance: 1000000,
      unlocked: false,
      image: 'assets/img/trophies/10km.png',
      image256: 'assets/img/trophies/10km_256.png'
    },
    {
      name: 'Petit randonneur',
      points: 30,
      description: 'Vous venez de faire une distance cumulée d\'un Semi-marathon : 21 Km atteints ! Encore un semi-effort pour devenir un Marathoniens de légende. ',
      pas: 0,
      distance: 2100000,
      unlocked: false,
      image: 'assets/img/trophies/semi-marathon.png',
      image256: 'assets/img/trophies/semi-marathon_256.png'
    },
    {
      name: 'Grand voyageur',
      points: 90,
      description: 'Vos efforts ont permis de faire la distance d\'un véritable marathon : 42 Km atteints ! S-Fit vous encourage pour la suite.',
      pas: 0,
      distance: 4200000,
      unlocked: false,
      image: 'assets/img/trophies/marathon.png',
      image256: 'assets/img/trophies/marathon_256.png'
    },
    {
      name: 'On ne l\'arrête pas',
      points: 90,
      description: '100 000 pas atteints ! Décidement... Vos mollets vont vous permettre d\'atteindre les sommets de la plus haute montagne.',
      pas: 100000,
      distance: 0,
      unlocked: false,
      image: 'assets/img/trophies/100000.png',
      image256: 'assets/img/trophies/100000_256.png'
    },
    {
      name: 'Le centième effort',
      points: 90,
      description: 'Voila vos 100 Km sont atteints ! Nous vous invitons maintenant à faire le maximum ! Jusqu\'au bout du monde !',
      pas: 0,
      distance: 10000000,
      unlocked: false,
      image: 'assets/img/trophies/100km.png',
      image256: 'assets/img/trophies/100km_256.png'
    },
    {
      name: 'Un petit pas pour l\'homme...',
      points: 200,
      description: 'Tous les trophées sont débloqués et le 1 million de pas atteint, bravo ! Vous devenez officiellement un membre premium S-Fit',
      pas: 1000000,
      distance: 0,
      unlocked: false,
      image: 'assets/img/trophies/million.png',
      image256: 'assets/img/trophies/million_256.png'
    }
  ];

  constructor(private modal: ModalController) {
    for (let pdata of this.data) {
      /*if (totalpas >= pdata.pas && totaldistance >= pdata.distance) {
        pdata.unlocked = true;
      }
      if (!pdata.unlocked) {
        pdata.image = "assets/img/trophies/bloque.png";
      }*/
    }
  }

  openTrophy(data){
    if (data.unlocked) {
      const myTrophy = this.modal.create('TrophyPage', { vdata: data });
      myTrophy.present();
    }
  }

}
