import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { PrevcombSubtitulosPage } from '../pages/prevcomb-subtitulos/prevcomb-subtitulos';
import { TbhivSubtitulosPage } from '../pages/tbhiv-subtitulos/tbhiv-subtitulos';
import { SifilisSubtitulosPage } from '../pages/sifilis-subtitulos/sifilis-subtitulos';
import { ConfiguracoesProvider } from '../providers/configuracoes/configuracoes';
/*import { PcSubtitulosPage } from '../pages/pc-subtitulos/pc-subtitulos';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { TbhivSubtitulosPage } from '../pages/tbhiv-subtitulos/tbhiv-subtitulos';*/
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  selectedTheme: String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private settings: ConfiguracoesProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToHome() {
    this.nav.setRoot(HomePage);
  }

  goToConfig() {
    this.nav.setRoot(ConfiguracaoPage);
  }

  goToPrevcombSubtitulos() {
    this.nav.setRoot(PrevcombSubtitulosPage);
  }

  goToTbhivSubtitulos(){
    this.nav.setRoot(TbhivSubtitulosPage);
  }
  goToSifilisSubtitulos(){
    this.nav.setRoot(SifilisSubtitulosPage);
  }
  /*

  

  

  goToTbhivSubtitulos(){
    this.nav.setRoot(TbhivSubtitulosPage);
  }*/
}

