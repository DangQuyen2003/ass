import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../common/product';
import { Router } from '@angular/router';

const _api = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }

  getProducts(search_key: any = null,): Observable<Array<Products>> {
    let url = _api + "products"
    if (search_key != null) {
      url += "?name_like=" + search_key
    }
    return this.http.get<Array<Products>>(url);
  }

  getProducts1(search_key: any = null,): Observable<Array<Products>> {
    let url = _api + "products1/?_limit=1"
    if (search_key != null) {
      url += "?name_like=" + search_key
    }
    return this.http.get<Array<Products>>(url);
  }

  getProducts2(search_key: any = null,): Observable<Array<Products>> {
    let url = _api + "products2/?_limit=2"
    if (search_key != null) {
      url += "?name_like=" + search_key
    }
    return this.http.get<Array<Products>>(url);
  }

  getProducts4(search_key: any = null,): Observable<Array<Products>> {
    let url = _api + "products4/?_limit=4"
    if (search_key != null) {
      url += "?name_like=" + search_key
    }
    return this.http.get<Array<Products>>(url);
  }




  getDetail(id: string): Observable<Products> {
    return this.http.get<Products>(_api + 'products/' + id);
  }

  Create(data: any): Observable<Array<Products>> {
    return this.http.post<Array<Products>>(_api + 'products', data);

  }

  Update(id: string, data: any): Observable<Array<Products>> {
    return this.http.put<Array<Products>>(_api + 'products/' + id, data);
  }

  Delete(id: string): Observable<Array<Products>> {
    return this.http.delete<Array<Products>>(_api + 'products/' + id);
  }
}
