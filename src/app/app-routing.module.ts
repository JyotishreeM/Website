import { NgModule, TemplateRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'login' ,
    component:LoginComponent
  },
  
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'reset',
    component:ResetComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'reset',
    component:ResetComponent

  },
  {
    path:'forgot',
    component:ForgotPasswordComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'pricing',
    component:PricingComponent
  },
  {
    path:'template',
    component:TemplatesComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
