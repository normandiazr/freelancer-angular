import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HeaderModule } from './components/header/header.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { ContactModule } from './components/contact/contact.module';
import { FooterModule } from './components/footer/footer.module';
import { AboutModule } from './components/about/about.module';
import { CopyrightModule } from './components/copyright/copyright.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HeaderModule,
    PortfolioModule,
    ContactModule,
    FooterModule,
    AboutModule,
    CopyrightModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
