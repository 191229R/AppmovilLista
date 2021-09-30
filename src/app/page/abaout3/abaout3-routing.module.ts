import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout3Page } from './abaout3.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout3PageRoutingModule {}
