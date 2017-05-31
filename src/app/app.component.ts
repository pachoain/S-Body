import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CreateUserPage } from '../pages/createUser/createUser';
import { HomePage } from '../pages/home/home';
import { InformationsPage } from '../pages/informations/informations';
import { MyWinPage } from '../pages/myWin/myWin';
import { ProgressionPage } from '../pages/progression/progression';
import { UserChoicePage } from '../pages/userChoice/userChoice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UserChoicePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Choix de l\'Utilisateur', component: UserChoicePage },
      { title: 'Mes Objectifs du jour', component: HomePage },
      { title: 'Informations', component: InformationsPage },
      { title: 'Trophées', component: MyWinPage },
      { title: 'Ma Progression', component: ProgressionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
