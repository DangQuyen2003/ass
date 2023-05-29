import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/common/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit{
  id: string = '';
  products: Array<Products> = [];
  constructor(private prodSrv: ProductService, private route: ActivatedRoute, private router: Router) { }
  productFormEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    image: new FormControl()
  });

  ngOnInit(): void {
  //  console.log(this._route.snapshot.params);
   const id = this.route.snapshot.params['id'];
   
   this.prodSrv.getDetail(id).subscribe(data => {
    this.productFormEdit = new FormGroup({
      name: new FormControl(data.name),
      price: new FormControl(data.price),
      image: new FormControl(data.image)
    });
    
   });
   
  }

  onUpdate(){
    this.prodSrv.Update(this.route.snapshot.params['id'], this.productFormEdit.value).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['admin'])
  }
}
