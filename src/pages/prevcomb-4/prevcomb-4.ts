import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_3Page } from '../prevcomb-3/prevcomb-3';
import { Prevcomb_5Page } from '../prevcomb-5/prevcomb-5';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';

/**
 * Generated class for the Prevcomb_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-4',
  templateUrl: 'prevcomb-4.html',
})
export class Prevcomb_4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prevcomb_4Page');
  }

  goToPrevcomb_3(){
    this.navCtrl.setRoot(Prevcomb_3Page);
  }

  goToPrevcomb_5(){
    this.navCtrl.setRoot(Prevcomb_5Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
