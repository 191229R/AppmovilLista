import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout6Page } from './abaout6.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout6PageRoutingModule {}
