import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SifilisSubtitulosPage } from '../sifilis-subtitulos/sifilis-subtitulos';

/**
 * Generated class for the Sifilis_6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sifilis-6',
  templateUrl: 'sifilis-6.html',
})
export class Sifilis_6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sifilis_6Page');
  }
  goToSifilisSubtitulos(){
    this.navCtrl.setRoot(SifilisSubtitulosPage);
  }


}
