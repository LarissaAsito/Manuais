import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TbhivSubtitulosPage } from './tbhiv-subtitulos';
import { TbhivGlossarioPageModule } from '../tbhiv-glossario/tbhiv-glossario.module';
import { Tbhiv_1PageModule } from '../tbhiv-1/tbhiv-1.module';
import { Tbhiv_2PageModule } from '../tbhiv-2/tbhiv-2.module';
import { Tbhiv_3PageModule } from '../tbhiv-3/tbhiv-3.module';
import { Tbhiv_4PageModule } from '../tbhiv-4/tbhiv-4.module';
import { Tbhiv_5PageModule } from '../tbhiv-5/tbhiv-5.module';
import { Tbhiv_6PageModule } from '../tbhiv-6/tbhiv-6.module';
import { Tbhiv_7PageModule } from '../tbhiv-7/tbhiv-7.module';

@NgModule({
  declarations: [
    TbhivSubtitulosPage,
  ],
  imports: [
    IonicPageModule.forChild(TbhivSubtitulosPage),
    TbhivGlossarioPageModule,
    Tbhiv_1PageModule,
    Tbhiv_2PageModule,
    Tbhiv_3PageModule,
    Tbhiv_4PageModule,
    Tbhiv_5PageModule,
    Tbhiv_6PageModule,
    Tbhiv_7PageModule,
  ],
})
export class TbhivSubtitulosPageModule {}
