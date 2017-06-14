import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController,  AlertController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor( private navParams: NavParams, private view: ViewController, public alertCtrl: AlertController) {
  }

  closeadd(){
    this.view.dismiss();
  }


  addUsers(){
      let alert = this.alertCtrl.create({
      title: 'Nouvel utilisateur ajouté!',
      subTitle: 'Votre compte est désormais opérationnel.',
      buttons: ['OK']
    });
    alert.present();
    this.view.dismiss();
  }



}
