import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_5Page } from '../prevcomb-5/prevcomb-5';
import { Prevcomb_7Page } from '../prevcomb-7/prevcomb-7';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';

/**
 * Generated class for the Prevcomb_6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-6',
  templateUrl: 'prevcomb-6.html',
})
export class Prevcomb_6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prevcomb_6Page');
  }

  goToPrevcomb_5(){
    this.navCtrl.push(Prevcomb_5Page);
  }

  goToPrevcomb_7(){
    this.navCtrl.push(Prevcomb_7Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
