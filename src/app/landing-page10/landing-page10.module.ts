import { CountToModule } from 'angular-count-to';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { SofboxModule } from './../sofbox/sofbox.module';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './components/team/team.component';
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
    FooterComponent,
    TeamComponent,
    CounterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SofboxModule,
    CommonModule,
    CountToModule
  ]
})
export class LandingPage10Module { }
