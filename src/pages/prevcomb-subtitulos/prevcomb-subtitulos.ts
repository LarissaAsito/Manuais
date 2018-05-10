import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_1Page } from '../prevcomb-1/prevcomb-1';
import { Prevcomb_2Page } from '../prevcomb-2/prevcomb-2';
import { Prevcomb_3Page } from '../prevcomb-3/prevcomb-3';
import { Prevcomb_4Page } from '../prevcomb-4/prevcomb-4';
import { Prevcomb_5Page } from '../prevcomb-5/prevcomb-5';
import { Prevcomb_7Page } from '../prevcomb-7/prevcomb-7';
import { Prevcomb_6Page } from '../prevcomb-6/prevcomb-6';
import { Prevcomb_8Page } from '../prevcomb-8/prevcomb-8';

/**
 * Generated class for the PrevcombSubtitulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-subtitulos',
  templateUrl: 'prevcomb-subtitulos.html',
})
export class PrevcombSubtitulosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrevcombSubtitulosPage');
  }

  goToPrevcomb_1(){
    this.navCtrl.setRoot(Prevcomb_1Page);
  }
  goToPrevcomb_2(){
    this.navCtrl.setRoot(Prevcomb_2Page);
  }
  goToPrevcomb_3(){
    this.navCtrl.setRoot(Prevcomb_3Page); 
  }
  goToPrevcomb_4(){
    this.navCtrl.setRoot(Prevcomb_4Page);
  }
  goToPrevcomb_5(){
    this.navCtrl.setRoot(Prevcomb_5Page);
  }
  goToPrevcomb_6(){
    this.navCtrl.setRoot(Prevcomb_6Page);
  }
  goToPrevcomb_7(){
    this.navCtrl.setRoot(Prevcomb_7Page);
  }
  goToPrevcomb_8(){
    this.navCtrl.setRoot(Prevcomb_8Page);
  }


}
