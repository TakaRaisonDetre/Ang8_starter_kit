import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes} from '@angular/router';
import {SofboxModule} from '../sofbox/sofbox.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ClientComponent } from './components/client/client.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
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
  declarations: [IndexComponent, HomeComponent, AboutComponent, ServiceComponent, FeatureComponent, ClientComponent, PricingComponent, FaqComponent, GetInTouchComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class LandingPage9Module { }
