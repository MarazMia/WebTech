import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './advertise/advertise.component';
import { HomePageContentsComponent } from './home-page-contents/home-page-contents.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "advertisement" , component : AdvertiseComponent},
  {path : "home" , component : HomePageContentsComponent},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
