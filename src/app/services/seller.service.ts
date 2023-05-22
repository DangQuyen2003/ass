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


  constructor(private http:HttpClient, private router: Router) { }

  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/seller',
    data,
    {observe: 'response'}).subscribe((result) => {
      // console.warn(result);
      if (result) {
        localStorage.setItem('seller', JSON.stringify(result));
        this.router.navigate(['app-seller-home'])
      }

    })

  }

  userSignIn(data:SignIn){
    // console.warn(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any) => {
      // console.warn(result);
      if (result && result.body && result.body.length) {
        // console.warn("dung tk");
        localStorage.setItem('seller', JSON.stringify(result));
        this.router.navigate(['app-seller-home'])
      }else{
        // console.warn("sai tk");
        this.isSignInError.emit(true)
      }
    })
  }
}
