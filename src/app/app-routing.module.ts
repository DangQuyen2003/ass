import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "app-seller-auth",
    component: SellerAuthComponent
  },
  {
    path: "app-seller-home",
    component: SellerHomeComponent

  },
  {
    path: "app-user-auth",
    component: UserAuthComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
