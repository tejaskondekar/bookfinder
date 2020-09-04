import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { HomeeComponent } from './homee/homee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'homee', component:HomeeComponent},
  {path:'pagenotfound', component:PagenotfoundComponent},
  {path:'**', redirectTo: '/pagenotfound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
