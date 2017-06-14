import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  data;

  constructor(private navParams: NavParams, private view: ViewController) {
    this.data = this.navParams.get('vdata');
    console.log(this.data);
  }

  closeUsers(){
    this.view.dismiss();
  }

}
