import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SofboxModule} from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { ServiceComponent } from './components/service/service.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
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
  declarations: [IndexComponent, ServiceComponent, FeaturesComponent, AboutComponent, HomeComponent, ContactComponent, FooterComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class LandingPage3Module { }
