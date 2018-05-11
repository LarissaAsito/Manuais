import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_2Page } from '../prevcomb-2/prevcomb-2';
import { Prevcomb_4Page } from '../prevcomb-4/prevcomb-4';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes';

/**
 * Generated class for the Prevcomb_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-3',
  templateUrl: 'prevcomb-3.html',
})
export class Prevcomb_3Page {

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
    console.log('ionViewDidLoad Prevcomb_3Page');
  }

  goToPrevcomb_2(){
    this.navCtrl.setRoot(Prevcomb_2Page);
  }

  goToPrevcomb_4(){
    this.navCtrl.setRoot(Prevcomb_4Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }

}
