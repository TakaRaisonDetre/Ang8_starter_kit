import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SofboxModule } from './sofbox/sofbox.module';
import { LandingPage8Module } from './landing-page8/landing-page8.module';
import { LandingPage1Module } from './landing-page1/landing-page1.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import {ContactFormService} from './sofbox/components/contact-form/contact-form.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SofboxModule,
    LandingPage8Module,
    LandingPage1Module,
    RecaptchaModule,
    HttpClientModule
  ],
  providers: [
    ContactFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
