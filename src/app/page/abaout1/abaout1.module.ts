import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout1PageRoutingModule } from './abaout1-routing.module';

import { Abaout1Page } from './abaout1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout1PageRoutingModule
  ],
  declarations: [Abaout1Page]
})
export class Abaout1PageModule {}
