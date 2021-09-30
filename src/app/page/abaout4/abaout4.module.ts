import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout4PageRoutingModule } from './abaout4-routing.module';

import { Abaout4Page } from './abaout4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout4PageRoutingModule
  ],
  declarations: [Abaout4Page]
})
export class Abaout4PageModule {}
