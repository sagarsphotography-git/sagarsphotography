import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { SingInComponent } from './Components/Auth/sing-in/sing-in.component';
import { SingUpComponent } from './Components/Auth/sing-up/sing-up.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'signin',component:SingInComponent},
{path:'signup',component:SingUpComponent},
{path:'contactus',component:ContactusComponent},
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
