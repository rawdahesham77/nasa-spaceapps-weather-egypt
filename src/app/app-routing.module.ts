import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-routing.module').then((m) => m.HomeRoutingModule),
  },
    {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  { path: '**', redirectTo: 'welcomePage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
