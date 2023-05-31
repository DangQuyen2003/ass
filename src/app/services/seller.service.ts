import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { SignIn, SignUp } from '../common/auth';
import {  Router } from '@angular/router';
import { observeOn } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSignInError = new EventEmitter<boolean>(false)
  invalidSellerAuth= new EventEmitter<boolean>(false)


  constructor(private http:HttpClient, private router: Router) { }

  userSignUp(seller:SignUp){
    this.http.post('http://localhost:3000/seller',
    seller,
    {observe: 'response'}).subscribe((result) => {
      // console.warn(result);
      if (result) {
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['signin'])
      }

    })

  }

  userSignIn(data:SignIn){

    this.http.get<SignUp[]>(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result) => {

      if (result && result.body?.length) {

        localStorage.setItem('seller', JSON.stringify(result.body[0]));
        this.router.navigate(['/'])
        this.invalidSellerAuth.emit(false);
      }else{

        this.invalidSellerAuth.emit(true);
      }
    })
  }

  sellerAuthReload() {
    if (localStorage.getItem("seller")) {
      this.router.navigate(["/"])
    }
  }
}
