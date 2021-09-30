import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'abaout1',
    loadChildren: () => import('./page/abaout1/abaout1.module').then( m => m.Abaout1PageModule)
  },
  {
    path: 'abaout2',
    loadChildren: () => import('./page/abaout2/abaout2.module').then( m => m.Abaout2PageModule)
  },
  {
    path: 'abaout3',
    loadChildren: () => import('./page/abaout3/abaout3.module').then( m => m.Abaout3PageModule)
  },
  {
    path: 'abaout4',
    loadChildren: () => import('./page/abaout4/abaout4.module').then( m => m.Abaout4PageModule)
  },
  {
    path: 'abaout5',
    loadChildren: () => import('./page/abaout5/abaout5.module').then( m => m.Abaout5PageModule)
  },
  {
    path: 'abaout6',
    loadChildren: () => import('./page/abaout6/abaout6.module').then( m => m.Abaout6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
