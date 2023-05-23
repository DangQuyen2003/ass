import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../common/product';

const _api = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(search_key:any =null,search_price:any =null): Observable<Array<Products>> {
    let url = _api+ "products"
    if(search_key !=null){
      url += "?name_like=" + "&price_like="+ search_key
    }
    return this.http.get<Array<Products>>( url);
  }

  getDetail(id: string): Observable<Array<Products>> {
    return this.http.get<Array<Products>>( _api + 'products/' + id);
  }

  Create(data: any): Observable<Array<Products>> {
    return this.http.post<Array<Products>>( _api + 'products', data);
    
  }

  Update(id: string, data: any): Observable<Array<Products>> {
    return this.http.put<Array<Products>>( _api + 'products/'+id, data);
  }
  
  Delete(id: string): Observable<Array<Products>> {
    return this.http.delete<Array<Products>>( _api + 'products/'+id);
  }
}
