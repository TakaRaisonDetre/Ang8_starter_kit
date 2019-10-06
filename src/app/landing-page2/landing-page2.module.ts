import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {SofboxModule} from "../sofbox/sofbox.module";
import { HomeComponent } from './components/home/home.component';
import { FancyCardsComponent } from './components/fancy-cards/fancy-cards.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ScreenShotComponent } from './components/screen-shot/screen-shot.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OverviewComponent } from './components/overview/overview.component';
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
  // tslint:disable-next-line:max-line-length
  declarations: [IndexComponent, HomeComponent, FancyCardsComponent, AboutComponent, ServicesComponent, ScreenShotComponent, AboutAppComponent, ClientsComponent, OverviewComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SofboxModule,
  ]
})
export class LandingPage2Module { }
