import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AfiliateComponent } from './components/afiliate/afiliate.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { HomeComponent } from './components/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
