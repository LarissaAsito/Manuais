import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SifilisSubtitulosPage } from '../sifilis-subtitulos/sifilis-subtitulos';

/**
 * Generated class for the Sifilis_10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sifilis-10',
  templateUrl: 'sifilis-10.html',
})
export class Sifilis_10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sifilis_10Page');
  }
  goToSifilisSubtitulos(){
    this.navCtrl.setRoot(SifilisSubtitulosPage);
  }


}
