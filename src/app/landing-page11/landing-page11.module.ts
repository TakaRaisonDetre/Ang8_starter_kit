import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './index/index.component';
import { SofboxModule } from './../sofbox/sofbox.module';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServicesComponent } from './components/services/services.component';
import { StillThinkingComponent } from './components/still-thinking/still-thinking.component';
import { HowWorksComponent } from './components/how-works/how-works.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullFeaturesComponent } from './components/full-features/full-features.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }

];

@NgModule({
  declarations: [HomeComponent, IndexComponent, AboutComponent, FeaturesComponent, ServicesComponent, StillThinkingComponent, HowWorksComponent, FaqComponent, FooterComponent, FullFeaturesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SofboxModule
  ]
})
export class LandingPage11Module { }
