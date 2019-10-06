import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from '@angular/router';
import {SofboxModule} from '../sofbox/sofbox.module';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import {CountToModule} from 'angular-count-to';
import { FooterComponent } from './components/footer/footer.component';

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
    FeaturesComponent,
    BlogComponent,
    AboutComponent,
    PricingComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
    CountToModule,
  ]
})
export class LandingPage1Module { }
