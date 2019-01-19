import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './Model/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ECommerceWebsitesComponent } from './Model/software-solutions/professional-websites/e-commerce-websites/e-commerce-websites.component';
import { PersonalWebsitesComponent } from './Model/software-solutions/professional-websites/personal-websites/personal-websites.component';
import { NewsWebsitesComponent } from './Model/software-solutions/professional-websites/news-websites/news-websites.component';
import { CorporateWebsitesComponent } from './Model/software-solutions/professional-websites/corporate-websites/corporate-websites.component';
import { SMEWebsitesComponent } from './Model/software-solutions/professional-websites/sme-websites/sme-websites.component';
import { ConsultationWebsitesComponent } from './Model/software-solutions/professional-websites/consultation-websites/consultation-websites.component';
import { PoliticalSitesComponent } from './Model/software-solutions/professional-websites/political-sites/political-sites.component';
import { OnlinePaymentWebsitesComponent } from './Model/software-solutions/professional-websites/online-payment-websites/online-payment-websites.component';
import { WritersAuthorsWebsitesComponent } from './Model/software-solutions/professional-websites/writers-authors-websites/writers-authors-websites.component';
import { CommunityBuildingWebsitesComponent } from './Model/software-solutions/professional-websites/community-building-websites/community-building-websites.component';
import { LogosComponent } from './Model/Graphic-Design/logos/logos.component';
import { AnimationsComponent } from './Model/Graphic-Design/animations/animations.component';
import { BusinessCardsComponent } from './Model/Graphic-Design/business-cards/business-cards.component';
import { PhotographyComponent } from './Model/Graphic-Design/photography/photography.component';
import { GoogleBusinessComponent } from './Model/Digital-Marketing/google-business/google-business.component';
import { AdvertsComponent } from './Model/Digital-Marketing/adverts/adverts.component';
import { FooterComponent } from './Model/footer/footer.component';
import { ServicesComponent } from './Model/others/services/services.component';
import { WhyChooseUsComponent } from './Model/others/why-choose-us/why-choose-us.component';
import { ShareComponent } from './Model/others/share/share.component';
import { MessageUsComponent } from './Model/others/message-us/message-us.component';
import { ContactComponent } from './Model/others/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ECommerceWebsitesComponent,
    PersonalWebsitesComponent,
    NewsWebsitesComponent,
    CorporateWebsitesComponent,
    SMEWebsitesComponent,
    ConsultationWebsitesComponent,
    PoliticalSitesComponent,
    OnlinePaymentWebsitesComponent,
    WritersAuthorsWebsitesComponent,
    CommunityBuildingWebsitesComponent,
    LogosComponent,
    AnimationsComponent,
    BusinessCardsComponent,
    PhotographyComponent,
    GoogleBusinessComponent,
    AdvertsComponent,
    FooterComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    ShareComponent,
    MessageUsComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
