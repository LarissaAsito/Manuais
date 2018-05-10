import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TbhivGlossarioPage } from '../tbhiv-glossario/tbhiv-glossario';
import { Tbhiv_1Page } from '../tbhiv-1/tbhiv-1';
import { Tbhiv_2Page } from '../tbhiv-2/tbhiv-2';
import { Tbhiv_3Page } from '../tbhiv-3/tbhiv-3';
import { Tbhiv_4Page } from '../tbhiv-4/tbhiv-4';
import { Tbhiv_5Page } from '../tbhiv-5/tbhiv-5';
import { Tbhiv_6Page } from '../tbhiv-6/tbhiv-6';
import { Tbhiv_7Page } from '../tbhiv-7/tbhiv-7';

/**
 * Generated class for the TbhivSubtitulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tbhiv-subtitulos',
  templateUrl: 'tbhiv-subtitulos.html',
})
export class TbhivSubtitulosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TbhivSubtitulosPage');
  }

  goToGlossario(){
    this.navCtrl.setRoot(TbhivGlossarioPage);
  } 

  goToTbhiv1(){
    this.navCtrl.setRoot(Tbhiv_1Page);
  }

  goToTbhiv2(){
    this.navCtrl.setRoot(Tbhiv_2Page);
  }

  goToTbhiv3(){
    this.navCtrl.setRoot(Tbhiv_3Page);
  }

  goToTbhiv4(){
    this.navCtrl.setRoot(Tbhiv_4Page);
  }

  goToTbhiv5(){
    this.navCtrl.setRoot(Tbhiv_5Page);
  }

  goToTbhiv6(){
    this.navCtrl.setRoot(Tbhiv_6Page);
  }

  goToTbhiv7(){
    this.navCtrl.setRoot(Tbhiv_7Page);
  }

}
