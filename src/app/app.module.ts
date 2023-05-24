import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './admin/components/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/components/footer-admin/footer-admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';
import { WatchComponent } from './pages/watch/watch.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { EditProductsComponent } from './admin/edit-products/edit-products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { CartComponent } from './pages/cart/cart.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SellerAuthComponent,

    SignupComponent,
    SigninComponent,
    LayoutComponent,
    LayoutAdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    HomeAdminComponent,

    WatchComponent,
    AboutComponent,
    ContactComponent,
    DetailComponent,
    EditProductsComponent,
    NotfoundComponent,
    AddProductsComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
