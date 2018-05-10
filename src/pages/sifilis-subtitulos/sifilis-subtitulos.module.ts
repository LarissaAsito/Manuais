import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SifilisSubtitulosPage } from './sifilis-subtitulos';
import { Sifilis_1PageModule } from '../sifilis-1/sifilis-1.module';
import { Sifilis_11PageModule } from '../sifilis-11/sifilis-11.module';
import { Sifilis_2PageModule } from '../sifilis-2/sifilis-2.module';
import { Sifilis_3PageModule } from '../sifilis-3/sifilis-3.module';
import { Sifilis_4PageModule } from '../sifilis-4/sifilis-4.module';
import { Sifilis_5PageModule } from '../sifilis-5/sifilis-5.module';
import { Sifilis_6PageModule } from '../sifilis-6/sifilis-6.module';
import { Sifilis_7PageModule } from '../sifilis-7/sifilis-7.module';
import { Sifilis_8PageModule } from '../sifilis-8/sifilis-8.module';
import { Sifilis_9PageModule } from '../sifilis-9/sifilis-9.module';
import { Sifilis_10PageModule } from '../sifilis-10/sifilis-10.module';

@NgModule({
  declarations: [
    SifilisSubtitulosPage,
  ],
  imports: [
    IonicPageModule.forChild(SifilisSubtitulosPage),
    Sifilis_1PageModule,
    Sifilis_2PageModule,
    Sifilis_3PageModule,
    Sifilis_4PageModule,
    Sifilis_5PageModule,
    Sifilis_6PageModule,
    Sifilis_7PageModule,
    Sifilis_8PageModule,
    Sifilis_9PageModule,
    Sifilis_10PageModule,
    Sifilis_11PageModule
    
  ],
})
export class SifilisSubtitulosPageModule {}
