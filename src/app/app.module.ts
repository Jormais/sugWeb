import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AfiliateComponent } from './components/afiliate/afiliate.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AfiliateComponent,
    GaleryComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
