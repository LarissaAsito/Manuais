import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_6Page } from '../prevcomb-6/prevcomb-6';
import { Prevcomb_8Page } from '../prevcomb-8/prevcomb-8';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes';

/**
 * Generated class for the Prevcomb_7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-7',
  templateUrl: 'prevcomb-7.html',
})
export class Prevcomb_7Page {

  // Variáveis.
  fontSize: number = 16; //Valor padrão do tamanho da fonte em 'px'. (16 px = 12 pt)
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private configProvider: ConfiguracoesProvider, //Injetando o "provedor" na página.
  ) {
    //Atribuindo os valores salvos que mudarão o estilo assim que a tela for carregada.
    //JSON.parse -> Transforma a string json recebida em objeto, assim é possível acessar as propriedades do objeto.
    var temp = JSON.parse(this.configProvider.getConfigData()); 
    
        this.fontSize = temp.tamanhoDoTexto;
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prevcomb_7Page');
  }

  goToPrevcomb_6(){
    this.navCtrl.push(Prevcomb_6Page);
  }

  goToPrevcomb_8(){
    this.navCtrl.push(Prevcomb_8Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
