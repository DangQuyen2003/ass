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
  products:Products = new Products;

  // products: Array<Products> = [];
  id: string = '';
  productDetail: FormGroup = new FormGroup({
    
    quantity: new FormControl(),
   
  });

  constructor(private proSrv: ProductService,private _route: ActivatedRoute) { }

  ngOnInit(): void {
   const id = this._route.snapshot.params['id'];
    console.log(id);
    
    // const { id } = params
    // console.log(id);
    this.proSrv.getDetail(id).subscribe(data => {
        
      this.products = data;
    })
  }
}
