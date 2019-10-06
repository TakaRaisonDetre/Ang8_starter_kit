import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {SofboxModule} from '../sofbox/sofbox.module';
import { CountToModule } from 'angular-count-to';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { FeaturesComponent } from './components/features/features.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import '../../assets/js/custom';


// Import your library
import { OwlModule } from 'ngx-owl-carousel';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }

];



@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    FeaturesComponent,
    BlogComponent,
    AboutMeComponent,
    ClientsComponent,
    ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
    CountToModule,
    OwlModule
  ]
})
export class LandingPage8Module { }
