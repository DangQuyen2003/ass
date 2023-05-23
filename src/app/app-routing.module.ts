import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';




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
        path: "app-seller-home",
        component: SellerHomeComponent

      },
    ]
  },

{
  path:"admin",
  component:LayoutAdminComponent,
  children:[
    {
      path:"",
      component:HomeAdminComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
