import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout6PageRoutingModule } from './abaout6-routing.module';

import { Abaout6Page } from './abaout6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout6PageRoutingModule
  ],
  declarations: [Abaout6Page]
})
export class Abaout6PageModule {}
