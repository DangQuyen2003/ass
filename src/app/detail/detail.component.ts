import { Component } from '@angular/core';
import { Products } from '../common/product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  products: Array<Products> = [];
  id: string = '';
  productDetail: FormGroup = new FormGroup({

    quantity: new FormControl(),
   
  });

  constructor(private proSrv: ProductService,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this._route.snapshot.params;
    console.log(params);
    
    // const { id } = params
    // console.log(id);
    
    this.proSrv.getDetail(this.id).subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
}
