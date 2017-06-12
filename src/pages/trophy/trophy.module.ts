import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrophyPage } from './trophy';

@NgModule({
  declarations: [
    TrophyPage,
  ],
  imports: [
    IonicPageModule.forChild(TrophyPage),
  ],
  exports: [
    TrophyPage
  ]
})
export class TrophyPageModule {}
