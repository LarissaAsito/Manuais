import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Prevcomb_1Page } from './prevcomb-1';
import { Prevcomb_2PageModule } from '../prevcomb-2/prevcomb-2.module';

@NgModule({
  declarations: [
    Prevcomb_1Page,
  ],
  imports: [
    IonicPageModule.forChild(Prevcomb_1Page),
    Prevcomb_2PageModule,
  ],
})
export class Prevcomb_1PageModule {}
