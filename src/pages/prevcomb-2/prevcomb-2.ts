import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prevcomb_1Page } from '../prevcomb-1/prevcomb-1';
import { Prevcomb_3Page } from '../prevcomb-3/prevcomb-3';
import { PrevcombSubtitulosPage } from '../prevcomb-subtitulos/prevcomb-subtitulos';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes';

/**
 * Generated class for the Prevcomb_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prevcomb-2',
  templateUrl: 'prevcomb-2.html',
})
export class Prevcomb_2Page {
  
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
    console.log('ionViewDidLoad Prevcomb_2Page');
  }

  goToPrevcomb_1(){
    this.navCtrl.setRoot(Prevcomb_1Page);
  }

  goToPrevcomb_3(){
    this.navCtrl.setRoot(Prevcomb_3Page);
  }

  goToPrevcombSubtitulos() {
    this.navCtrl.setRoot(PrevcombSubtitulosPage);
  }
}
