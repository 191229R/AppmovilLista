import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout2PageRoutingModule } from './abaout2-routing.module';

import { Abaout2Page } from './abaout2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout2PageRoutingModule
  ],
  declarations: [Abaout2Page]
})
export class Abaout2PageModule {}
