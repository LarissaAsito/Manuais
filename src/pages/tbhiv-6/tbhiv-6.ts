import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tbhiv_5Page } from '../tbhiv-5/tbhiv-5'; // Página importada para que haja navegação.
import { Tbhiv_7Page } from '../tbhiv-7/tbhiv-7'; // Página importada para que haja navegação.
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes'; // Provider importado para que haja o carregamento das configuracoes salvas.
import { TbhivSubtitulosPage } from '../tbhiv-subtitulos/tbhiv-subtitulos';

/**
 * Generated class for the Tbhiv_6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tbhiv-6',
  templateUrl: 'tbhiv-6.html',
}) 
export class Tbhiv_6Page {

  // Variáveis.
  fontSize: number = 16; //Valor padrão do tamanho da fonte em 'px'. (16 px = 12 pt)
  backgroundColor: string = 'white'; //Valor padrão da cor de fundo.
  fontColor: string = 'black'; //Valor padrão da cor da fonte.

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
    this.backgroundColor = temp.corDaFonte;
    this.fontColor = temp.corDeFundo;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tbhiv_6Page');
  }

  goToTbhiv_5(){
    this.navCtrl.push(Tbhiv_5Page);
  }

  goToTbhiv_7(){
    this.navCtrl.push(Tbhiv_7Page);
  }
  goToTbhivSubtitulos(){
    this.navCtrl.setRoot(TbhivSubtitulosPage);
  }

}
