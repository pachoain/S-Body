import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trophy',
  templateUrl: 'trophy.html',
})
export class TrophyPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeTrophy(){
    this.view.dismiss();
  }

}
