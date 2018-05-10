import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sifilis_1Page } from '../sifilis-1/sifilis-1';
import { Sifilis_2Page } from '../sifilis-2/sifilis-2';
import { Sifilis_3Page } from '../sifilis-3/sifilis-3';
import { Sifilis_4Page } from '../sifilis-4/sifilis-4';
import { Sifilis_5Page } from '../sifilis-5/sifilis-5';
import { Sifilis_6Page } from '../sifilis-6/sifilis-6';
import { Sifilis_7Page } from '../sifilis-7/sifilis-7';
import { Sifilis_8Page } from '../sifilis-8/sifilis-8';
import { Sifilis_9Page } from '../sifilis-9/sifilis-9';
import { Sifilis_10Page } from '../sifilis-10/sifilis-10';
import { Sifilis_11Page } from '../sifilis-11/sifilis-11';

@IonicPage()
@Component({
  selector: 'page-sifilis-subtitulos',
  templateUrl: 'sifilis-subtitulos.html',
})
export class SifilisSubtitulosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SifilisSubtitulosPage');
  }
  goSifilis_1Page(){
    this.navCtrl.setRoot(Sifilis_1Page);
  }
  goSifilis_2Page(){
    this.navCtrl.setRoot(Sifilis_2Page);
  }
  goSifilis_3Page(){
    this.navCtrl.setRoot(Sifilis_3Page);
  }
  goSifilis_4Page(){
    this.navCtrl.setRoot(Sifilis_4Page); 
  }
  goSifilis_5Page(){
    this.navCtrl.setRoot(Sifilis_5Page);
  }
  goSifilis_6Page(){
    this.navCtrl.setRoot(Sifilis_6Page);
  }
  goSifilis_7Page(){
    this.navCtrl.setRoot(Sifilis_7Page);
  }
  goSifilis_8Page(){
    this.navCtrl.setRoot(Sifilis_8Page);
  }
  goSifilis_9Page(){
    this.navCtrl.setRoot(Sifilis_9Page);
  }
  goSifilis_10Page(){
    this.navCtrl.setRoot(Sifilis_10Page);
  }
  goSifilis_11Page(){
    this.navCtrl.setRoot(Sifilis_11Page);
  }


}
