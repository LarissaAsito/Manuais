import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

/*
  Generated class for the ConfiguracoesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//Variável global. (Tem que declarar antes do "@Injectable")
let configTexto_key_name = "configuracaoTexto"; //Constante

@Injectable()//Notação que demonstra que essa classe será utilizada por outras classes.

//Provedores são distribuidores de informações.
export class ConfiguracoesProvider {

  // -------------------------------- Funções --------------------------------
  // localStorage.getItem(key_name); //Obtem o valor-par da chave.
  // localStorage.setItem(key_name, value); //Insere o par chave-valor no localstorage.
  // localStorage.remove(key_name); //Remove o par chave-valor do localstorage.
  // localStorage.clear(); //Remove todos os par chave-valor do localstorage.
  // localStorage.length(); //Retorna a quantidade de chaves existentes no localstorage.
  private theme: BehaviorSubject<String>;
  constructor(public http: HttpClient) {
    console.log('Provider da configuracao do texto foi executado');
    this.theme = new BehaviorSubject('dark-theme');
  }

  setActiveTheme(val){
    this.theme.next(val);
  }

  getActiveTheme(){
    return this.theme.asObservable();
  }

  //Pega as configurações do localstorage.
  getConfigData(): any{ 
    //localStorage.getItem acessa o localstorage para ler informações. Essas informações lidas, estão em formato de texto.
    return (localStorage.getItem(configTexto_key_name)); //Retornará null se for a primeira vez que o usuário instalar e entrar no app.
  }
  
  //Função que grava os dados no localstorage
  //Passagem obrigatória de parâmetros -> corDeFundo: string (variável que recebe o tipo string)
  setConfigData(tamanhoDoTexto: number, corDeFundo: string, corDaFonte: string){ 
    /*
      let é uma constante e um tipo de variável que é acessivel apenas em um bloco de código. 
      É como se fosse uma variável local. (Ela NÃO pode ser usada antes de ser declarada)
    */
    let configTextinho = {  //Atribuindo os valores recebidos para o array.
      tamanhoDoTexto: tamanhoDoTexto,
      corDaFonte: corDaFonte,
      corDeFundo: corDeFundo
    }

    //localStorage.setItem acessa o localstorage para gravar informações. Essas informações gravadas, são salvas apenas em formato de texto.
    //Por isso o configTextinho (que é um array) é passado para o fomato de JSON e esse formato é convertido em string (stringfy)
    localStorage.setItem(configTexto_key_name, JSON.stringify(configTextinho));
    
  }


}
