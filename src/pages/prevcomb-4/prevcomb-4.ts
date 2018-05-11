import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_3Page } from '../prevcomb-3/prevcomb-3';
import { Prevcomb_5Page } from '../prevcomb-5/prevcomb-5';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes';

/**
 * Generated class for the Prevcomb_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-4',
  templateUrl: 'prevcomb-4.html',
})
export class Prevcomb_4Page {

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
    console.log('ionViewDidLoad Prevcomb_4Page');
  }

  goToPrevcomb_3(){
    this.navCtrl.setRoot(Prevcomb_3Page);
  }

  goToPrevcomb_5(){
    this.navCtrl.setRoot(Prevcomb_5Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
