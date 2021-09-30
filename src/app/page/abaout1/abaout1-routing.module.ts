import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout1Page } from './abaout1.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout1PageRoutingModule {}
