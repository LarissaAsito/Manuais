import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tbhiv_6Page } from '../tbhiv-6/tbhiv-6'; // Página importada para que haja navegação.
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes'; // Provider importado para que haja o carregamento das configuracoes salvas.
import { TbhivSubtitulosPage } from '../tbhiv-subtitulos/tbhiv-subtitulos';

/**
 * Generated class for the Tbhiv_7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tbhiv-7',
  templateUrl: 'tbhiv-7.html', 
})
export class Tbhiv_7Page {

  // Variáveis.
  fontSize: number = 16; //Valor padrão do tamanho da fonte em 'px'. (16 px = 12 pt)
  
  // Funções.
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private configProvider: ConfiguracoesProvider, //Injetando o "provedor" na página.
  ) {
    //Atribuindo os valores salvos que mudarão o estilo assim que a tela for carregada.
    //JSON.parse -> Transforma a string json recebida em objeto, assim é possível acessar as propriedades do objeto.
    var temp = JSON.parse(this.configProvider.getConfigData()); 

    this.fontSize = temp.tamanhoDoTexto;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tbhiv_7Page');
  }

  goToTbhiv_6(){
    this.navCtrl.push(Tbhiv_6Page);
  }

  goToTbhivSubtitulos(){
    this.navCtrl.setRoot(TbhivSubtitulosPage);
  }

}
