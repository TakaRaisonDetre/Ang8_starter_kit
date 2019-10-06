import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RouterModule} from '@angular/router';


import { RootComponent } from './root/root.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HeaderStyle1Component } from './components/partials/headers/header-style1/header-style1.component';
import { FooterStyle1Component } from './components/partials/footers/footer-style1/footer-style1.component';
import { ClientCarouselComponent } from './components/client-carousel/client-carousel.component';
import { ParallaxHeroStyle1Component } from './components/parallax-hero-style1/parallax-hero-style1.component';
import { ColorCustomizerComponent } from './components/color-customizer/color-customizer.component';
import { TopbarStyle1Component } from './components/partials/topbars/topbar-style1/topbar-style1.component';
import { FooterStyle2Component } from './components/partials/footers/footer-style2/footer-style2.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PricingCardComponent } from './components/card/pricing-card/pricing-card.component';
import { CardStyle1Component } from './components/card/card-style1/card-style1.component';
import { CardStyle2Component } from './components/card/card-style2/card-style2.component';
import { CardStyle3Component } from './components/card/card-style3/card-style3.component';
import { SectionStyle1Component } from './components/sections/section-style1/section-style1.component';
import { SectionStyle2Component } from './components/sections/section-style2/section-style2.component';
import { CardStyle4Component } from './components/card/card-style4/card-style4.component';
import { SectionTitleComponent } from './components/sections/section-title/section-title.component';
import { FooterMainComponent } from './components/partials/footers/footer-main/footer-main.component';
import { FooterLogoComponent } from './components/footer-components/footer-logo/footer-logo.component';
import { FooterAddressComponent } from './components/footer-components/footer-address/footer-address.component';
import { FooterLinksComponent } from './components/footer-components/footer-links/footer-links.component';
import { FancyCardComponent } from './components/card/fancy-card/fancy-card.component';
import { AnimationShapeComponent } from './components/animation-shape/animation-shape.component';
import { AboutStyle1Component } from './components/about/about-style1/about-style1.component';
import { CardStyle5Component } from './components/card/card-style5/card-style5.component';
import { CardStyle6Component } from './components/card/card-style6/card-style6.component';
import { PricingCardStyle2Component } from './components/card/pricing-card-style2/pricing-card-style2.component';
import { CardStyle7Component } from './components/card/card-style7/card-style7.component';
import { FooterStyle3Component } from './components/partials/footers/footer-style3/footer-style3.component';
import { CardStyle8Component } from './components/card/card-style8/card-style8.component';
import { ParallaxVideoStyle2Component } from './components/parallax-video-style2/parallax-video-style2.component';
import { CardStyle9Component } from './components/card/card-style9/card-style9.component';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormsModule} from '@angular/forms';
import { SectionBannerStyle1Component } from './components/sections/section-banner-style1/section-banner-style1.component';
import { SectionStyle3Component } from './components/sections/section-style3/section-style3.component';
import { PricingCardStyle3Component } from './components/card/pricing-card-style3/pricing-card-style3.component';
import { HeaderStyle2Component } from './components/partials/headers/header-style2/header-style2.component';
import { SectionStyle6Component } from './components/sections/section-style6/section-style6.component';
import { SectionStyleComponent } from './components/sections/section-style/section-style.component';
import { SectionIconTitleComponent } from './components/sections/section-icon-title/section-icon-title.component';
import { FeatureCardComponent } from './components/card/feature-card/feature-card.component';



@NgModule({
  declarations: [
    RootComponent,
    LoaderComponent,
    ScrollTopComponent,
    HeaderStyle1Component,
    FooterStyle1Component,
    FooterStyle2Component,
    ClientCarouselComponent,
    ParallaxHeroStyle1Component,
    ColorCustomizerComponent,
    TopbarStyle1Component,
    ContactFormComponent,
    PricingCardComponent,
    CardStyle1Component,
    CardStyle2Component,
    CardStyle3Component,
    SectionStyleComponent,
    SectionStyle1Component,
    SectionStyle2Component,
    SectionStyle6Component,
    CardStyle4Component,
    SectionTitleComponent,
    FooterMainComponent,
    FooterLogoComponent,
    FooterAddressComponent,
    FooterLinksComponent,
    FancyCardComponent,
    AboutStyle1Component,
    CardStyle5Component,
    CardStyle6Component,
    PricingCardStyle2Component,
    CardStyle7Component,
    FooterStyle3Component,
    CardStyle8Component,
    ParallaxVideoStyle2Component,
    AnimationShapeComponent,
    SectionBannerStyle1Component,
    SectionStyle3Component,
    CardStyle9Component,
    PricingCardStyle3Component,
    HeaderStyle2Component,
    SectionIconTitleComponent,
    FeatureCardComponent,
  ],
  exports: [
    RootComponent,
    LoaderComponent,
    ScrollTopComponent,
    HeaderStyle1Component,
    FooterStyle1Component,
    FooterStyle2Component,
    ClientCarouselComponent,
    ParallaxHeroStyle1Component,
    ColorCustomizerComponent,
    TopbarStyle1Component,
    ContactFormComponent,
    PricingCardComponent,
    CardStyle1Component,
    CardStyle2Component,
    CardStyle3Component,
    SectionStyleComponent,
    SectionStyle1Component,
    SectionStyle2Component,
    SectionStyle6Component,
    CardStyle4Component,
    SectionTitleComponent,
    FooterMainComponent,
    FooterLogoComponent,
    FooterAddressComponent,
    FooterLinksComponent,
    FancyCardComponent,
    AboutStyle1Component,
    CardStyle5Component,
    CardStyle6Component,
    PricingCardStyle2Component,
    CardStyle7Component,
    FooterStyle3Component,
    CardStyle8Component,
    ParallaxVideoStyle2Component,
    AnimationShapeComponent,
    AboutStyle1Component,
    SectionBannerStyle1Component,
    CardStyle9Component,
    PricingCardStyle3Component,
    HeaderStyle2Component,
    SectionIconTitleComponent,
    FeatureCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    RecaptchaModule,
    FormsModule
  ]
})
export class SofboxModule { }
