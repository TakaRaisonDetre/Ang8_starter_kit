import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SofboxModule } from './../sofbox/sofbox.module';
import {RouterModule, Routes} from "@angular/router";
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturesTwoComponent } from './components/features-two/features-two.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
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
  declarations: [IndexComponent, HomeComponent, FeaturesComponent, FeaturesTwoComponent, ResponsiveComponent, FooterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SofboxModule
  ]
})
export class LandingPage14Module { }
