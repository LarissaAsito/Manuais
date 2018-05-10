import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_6Page } from '../prevcomb-6/prevcomb-6';
import { Prevcomb_8Page } from '../prevcomb-8/prevcomb-8';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';

/**
 * Generated class for the Prevcomb_7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-7',
  templateUrl: 'prevcomb-7.html',
})
export class Prevcomb_7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prevcomb_7Page');
  }

  goToPrevcomb_6(){
    this.navCtrl.push(Prevcomb_6Page);
  }

  goToPrevcomb_8(){
    this.navCtrl.push(Prevcomb_8Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
