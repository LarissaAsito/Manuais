import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiguracoesProvider } from '../../providers/configuracoes/configuracoes'; // Provider importado para que haja o armazenamento das configurações.
import { AlertController } from 'ionic-angular'; // "Biblioteca" importada para mostrar a mensagem de alerta após as configurações forem salvas.

/**
 * Generated class for the ConfiguracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html'
})
export class ConfiguracaoPage {

  // Variáveis.
  fontSize: number = 16; //Valor padrão do tamanho da fonte em 'px'. (16 px = 12 pt)
  backgroundColor: string = 'white'; //Valor padrão da cor de fundo.
  fontColor: string = 'black'; //Valor padrão da cor da fonte.

  selectedTheme: String;
  tema: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private configProvider: ConfiguracoesProvider, //Injetando o "provedor" na página.
    private alertCtrl: AlertController
  ) {
    this.configProvider.getActiveTheme().subscribe(val => this.selectedTheme = val);
    if(this.selectedTheme=="dark-theme")
      this.tema="Você está no tema escuro";
    else
      this.tema="Você está no tema claro";
  }

  toggleAppTheme() {
    if(this.selectedTheme == 'dark-theme') {
      this.configProvider.setActiveTheme('light-theme');
      this.tema="Você está no tema claro";
    } else {
      this.configProvider.setActiveTheme('dark-theme');
      this.tema="Você está no tema escuro";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  salvarConfiguracoes(tamanhoFonte: number, tema: string){

    // Atribuindo os valores da configuracao que serão salvos. 
    if(tema === "temaClaro"){
      this.backgroundColor = 'white';
      this.fontColor = 'black';
    }

    if(tema === "temaEscuro"){
      this.backgroundColor = 'black';
      this.fontColor = 'white';
    }

    this.fontSize = tamanhoFonte;
    this.configProvider.setConfigData(this.fontSize, this.fontColor, this.backgroundColor); //Armazenando a configuracao no localstorage.
    
    //Após salvar as cofigurações, mostra-se uma mensagem de confirmação.
    this.mostrarMensagemDeAlerta("Configurações", "Suas configurações foram salvas com sucesso!");
  }

  //mensagem?: string -> é um parâmetro opcional da função.
  mostrarMensagemDeAlerta(titulo: string, subtitulo: string, mensagem?: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ['OK']
    });
    alert.present();
  }

}
