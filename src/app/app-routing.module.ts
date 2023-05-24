import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';

import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';
import { WatchComponent } from './pages/watch/watch.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { CartComponent } from './pages/cart/cart.component';




const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "signin",
        component: SigninComponent
      },
      {
        path: "watch",
        component: WatchComponent
      },
      {
        path: "cart",
        component: CartComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }, 
      

    ]
  },

  {
    path: "admin",
    component: LayoutAdminComponent,
    children: [
      {
        path: "",
        component: HomeAdminComponent
      }, 
      {
        path: "add",
        component: AddProductsComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
