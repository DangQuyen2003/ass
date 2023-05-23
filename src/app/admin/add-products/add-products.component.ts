import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  constructor(private prodSrv: ProductService ) { }
  productFormCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    image: new FormControl()
  });
  ngOnInit(): void {
  }
  onCreate(){
    this.prodSrv.Create(this.productFormCreate.value).subscribe(data => {
      console.log(data);
    })
    
  }
}
