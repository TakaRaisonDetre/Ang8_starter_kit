import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {SofboxModule} from '../sofbox/sofbox.module';
import {CountToModule} from 'angular-count-to';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ScreenShotComponent } from './components/screen-shot/screen-shot.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CompareServiceComponent } from './components/compare-service/compare-service.component';
import { CounterComponent } from './components/counter/counter.component';

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
    ClientsComponent,
    ContactComponent,
    BlogComponent,
    ScreenShotComponent,
    PricingComponent,
    TeamComponent,
    TestimonialComponent,
    SpecialitiesComponent,
    FaqComponent,
    FeatureComponent,
    CompareServiceComponent,
    CounterComponent
  ],
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
export class LandingPage4Module { }
