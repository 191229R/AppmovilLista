import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout5PageRoutingModule } from './abaout5-routing.module';

import { Abaout5Page } from './abaout5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout5PageRoutingModule
  ],
  declarations: [Abaout5Page]
})
export class Abaout5PageModule {}
