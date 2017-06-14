import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trophy',
  templateUrl: 'trophy.html',
})
export class TrophyPage {
  data;

  constructor(private navParams: NavParams, private view: ViewController) {
    this.data = this.navParams.get('vdata');
  }

  closeTrophy(){
    this.view.dismiss();
  }
}
