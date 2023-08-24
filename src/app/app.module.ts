import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import{HttpClientModule} from '@angular/common/http';
import{DataTablesModule} from 'angular-datatables';
import { NextDirective } from './btnDirectives/next.directive';
import { PrevDirective } from './btnDirectives/prev.directive';
import { ResetComponent } from './component/reset/reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ContactUsComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoginComponent,
    PricingComponent,
    ProductComponent,
    RegisterComponent,
    TemplatesComponent,
    DashboardComponent,
    NextDirective,
    PrevDirective,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
