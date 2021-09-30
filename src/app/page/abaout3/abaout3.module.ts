import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout3PageRoutingModule } from './abaout3-routing.module';

import { Abaout3Page } from './abaout3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout3PageRoutingModule
  ],
  declarations: [Abaout3Page]
})
export class Abaout3PageModule {}
