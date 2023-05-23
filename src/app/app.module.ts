import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './admin/components/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/components/footer-admin/footer-admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SellerAuthComponent,

    SellerHomeComponent,
      SignupComponent,
      SigninComponent,
      LayoutComponent,
      LayoutAdminComponent,
      HeaderAdminComponent,
      FooterAdminComponent,
      HomeAdminComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
