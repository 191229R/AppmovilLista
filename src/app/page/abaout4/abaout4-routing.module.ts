import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout4Page } from './abaout4.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout4PageRoutingModule {}
