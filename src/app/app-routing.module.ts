import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RootComponent} from './sofbox/root/root.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  /*{ path: '', loadChildren: './landing-page4/landing-page4.module#LandingPage4Module' },*/
  { path: '', component: RootComponent },
  { path: 'landing-page1', loadChildren: './landing-page4/landing-page4.module#LandingPage4Module' },
  { path: 'landing-page2', loadChildren: './landing-page2/landing-page2.module#LandingPage2Module' },
  { path: 'landing-page3', loadChildren: './landing-page1/landing-page1.module#LandingPage1Module' },
  { path: 'landing-page4', loadChildren: './landing-page8/landing-page8.module#LandingPage8Module' },
  { path: 'landing-page5', loadChildren: './landing-page9/landing-page9.module#LandingPage9Module' },
  { path: 'landing-page6', loadChildren: './landing-page3/landing-page3.module#LandingPage3Module' },
  { path: 'landing-page7', loadChildren: './landing-page5/landing-page5.module#LandingPage5Module' },
  { path: 'landing-page8', loadChildren: './landing-page6/landing-page6.module#LandingPage6Module' },
  { path: 'landing-page9', loadChildren: './landing-page10/landing-page10.module#LandingPage10Module' },
  { path: 'landing-page10', loadChildren: './landing-page11/landing-page11.module#LandingPage11Module' },
  { path: 'landing-page11', loadChildren: './landing-page14/landing-page14.module#LandingPage14Module' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
