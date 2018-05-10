import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_2Page } from '../prevcomb-2/prevcomb-2';
import { Prevcomb_4Page } from '../prevcomb-4/prevcomb-4';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';

/**
 * Generated class for the Prevcomb_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-3',
  templateUrl: 'prevcomb-3.html',
})
export class Prevcomb_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prevcomb_3Page');
  }

  goToPrevcomb_2(){
    this.navCtrl.setRoot(Prevcomb_2Page);
  }

  goToPrevcomb_4(){
    this.navCtrl.setRoot(Prevcomb_4Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
