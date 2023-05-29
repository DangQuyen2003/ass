import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/common/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  products: Array<Products> = [];
  menuType: String = 'default';
  sellerName: String = '';
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
 
  constructor(private router: Router,private proSrv: ProductService) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      // console.warn(val.url);
      if (val.url) {
        // console.warn(val.url);

        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.warn('this in seller area');
          this.menuType = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        } else {
          // console.warn('outside seller ');
          this.menuType = 'default';
        }
      }
    });
    this.proSrv.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  LogOut() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
  onSearch(){
    // alert(this.searchForm.value.name)
    this.proSrv.getProducts(this.searchForm.value.name).subscribe(data => {
      this.products = data;
    })
  }
}
