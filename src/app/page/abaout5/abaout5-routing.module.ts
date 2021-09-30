import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout5Page } from './abaout5.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout5PageRoutingModule {}
