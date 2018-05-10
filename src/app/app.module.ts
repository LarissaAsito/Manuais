import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfiguracaoPageModule } from '../pages/configuracao/configuracao.module';
import { PrevcombSubtitulosPageModule } from '../pages/prevcomb-subtitulos/prevcomb-subtitulos.module';
import { TbhivSubtitulosPageModule } from '../pages/tbhiv-subtitulos/tbhiv-subtitulos.module';
import { ConfiguracoesProvider } from '../providers/configuracoes/configuracoes'; //Provider importado.
import { HttpClientModule } from '@angular/common/http'; //"Auxiliar" de provider importado.
import { SifilisSubtitulosPageModule } from '../pages/sifilis-subtitulos/sifilis-subtitulos.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ConfiguracaoPageModule,
    PrevcombSubtitulosPageModule,
    TbhivSubtitulosPageModule,
    SifilisSubtitulosPageModule,
    HttpClientModule //"Auxiliar" de provedor adicionado.
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfiguracoesProvider
  ]
})
export class AppModule {}
