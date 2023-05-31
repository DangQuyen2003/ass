import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/common/product';

import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  productQuantity:number=1;

  products:Products = new Products;

  // products: Array<Products> = [];
  id: string = '';
  productDetail: FormGroup = new FormGroup({

    quantity: new FormControl(),

  });

  constructor(private proSrv: ProductService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params['id'];
    console.warn(id);


    // const { id } = params
    // console.log(id);
    this.proSrv.getDetail(id).subscribe(data => {

      this.products = data;


      let cartData = localStorage.getItem('localCart');
      if (id && cartData) {

      }
    })

  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='max'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

  AddToCart(){
    if(this.products){
      this.products.quantity = this.productQuantity
      if (!localStorage.getItem('seller')) {
        // console.warn(this.products);
        this.proSrv.localAddToCart(this.products)
      }

    }
  }
}
