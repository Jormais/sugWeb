import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AfiliateComponent } from './components/afiliate/afiliate.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { GaleryComponent } from './components/galery/galery.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "afiliate",
    component : AfiliateComponent
  },
  {
    path : "galery",
    component : GaleryComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "login",
    component : LogInComponent
  },
  {
    path : "discount",
    component : DescuentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
