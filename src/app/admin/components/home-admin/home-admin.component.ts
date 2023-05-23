import { Component } from '@angular/core';
import{FormControl,FormGroup} from "@angular/forms"
import { Products } from 'src/app/common/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent {
  products: Array<Products> = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });
  constructor(private proSrv: ProductService) { }

  ngOnInit(): void {
    this.proSrv.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  onDelete(id: string){
    if(confirm("Bạn có muốn xóa không")){
      this.proSrv.Delete(id).subscribe(data =>{
        this.proSrv.getProducts().subscribe(data => {
        this.products = data;
      })
    })
    }

  }

  onEdit(product: any ){

  }
  onSearch(){
    // alert(this.searchForm.value.name)
    this.proSrv.getProducts(this.searchForm.value.name,this.searchForm.value.price).subscribe(data => {
      this.products = data;
    })
  }
}
