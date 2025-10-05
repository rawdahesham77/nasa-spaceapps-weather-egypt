import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { HomeLayoutComponent } from '../layouts/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component:HomeLayoutComponent,
    children: [
      { path: 'welcomePage', component: HomeComponent },
      { path: 'map', component: MapComponent },
      { path: 'aboutus', component: AboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
