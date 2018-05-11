import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_5Page } from '../prevcomb-5/prevcomb-5';
import { Prevcomb_7Page } from '../prevcomb-7/prevcomb-7';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes';

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
