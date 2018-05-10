import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TbhivSubtitulosPage } from '../tbhiv-subtitulos/tbhiv-subtitulos';

/**
 * Generated class for the TbhivGlossarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tbhiv-glossario',
  templateUrl: 'tbhiv-glossario.html',
})
export class TbhivGlossarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TbhivGlossarioPage');
  }

  goToTbhivSubtitulos(){
    this.navCtrl.setRoot(TbhivSubtitulosPage);
  }

}
