import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_4Page } from '../prevcomb-4/prevcomb-4';
import { Prevcomb_6Page } from '../prevcomb-6/prevcomb-6';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';

/**
 * Generated class for the Prevcomb_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-5',
  templateUrl: 'prevcomb-5.html',
})
export class Prevcomb_5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prevcomb_5Page');
  }

  goToPrevcomb_4(){
    this.navCtrl.push(Prevcomb_4Page);
  }

  goToPrevcomb_6(){
    this.navCtrl.push(Prevcomb_6Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }
}
