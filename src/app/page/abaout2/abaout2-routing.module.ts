import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout2Page } from './abaout2.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout2PageRoutingModule {}
