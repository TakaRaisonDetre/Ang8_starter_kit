import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import {SofboxModule} from "../sofbox/sofbox.module";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { CounterComponent } from './components/counter/counter.component';
import {CountToModule} from "angular-count-to";
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { CompareServicesComponent } from './components/compare-services/compare-services.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, HomeComponent, AboutComponent, ServiceComponent, SpecialitiesComponent, CounterComponent, TestimonialComponent, PricingComponent, TeamComponent, CompareServicesComponent, FaqComponent, BlogComponent, ClientsComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
    CountToModule,
  ]
})
export class LandingPage6Module { }
