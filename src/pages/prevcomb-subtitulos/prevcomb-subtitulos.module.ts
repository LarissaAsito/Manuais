import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrevcombSubtitulosPage } from './prevcomb-subtitulos';
import { Prevcomb_1PageModule } from '../prevcomb-1/prevcomb-1.module';
import { Prevcomb_2PageModule } from '../prevcomb-2/prevcomb-2.module';
import { Prevcomb_3PageModule } from '../prevcomb-3/prevcomb-3.module';
import { Prevcomb_4PageModule } from '../prevcomb-4/prevcomb-4.module';
import { Prevcomb_5PageModule } from '../prevcomb-5/prevcomb-5.module';
import { Prevcomb_6PageModule } from '../prevcomb-6/prevcomb-6.module';
import { Prevcomb_7PageModule } from '../prevcomb-7/prevcomb-7.module';
import { Prevcomb_8PageModule } from '../prevcomb-8/prevcomb-8.module';

@NgModule({
  declarations: [
    PrevcombSubtitulosPage,
  ],
  imports: [
    IonicPageModule.forChild(PrevcombSubtitulosPage),
    Prevcomb_1PageModule,
    Prevcomb_2PageModule,
    Prevcomb_3PageModule,
    Prevcomb_4PageModule,
    Prevcomb_5PageModule,
    Prevcomb_6PageModule,
    Prevcomb_7PageModule,
    Prevcomb_8PageModule,

  ],
})
export class PrevcombSubtitulosPageModule {}
