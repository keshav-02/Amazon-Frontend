import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategory() : Observable<object> {
    //access httpclient
    //import httpClientModule in app.module.ts
    return this.http.get("http://localhost:8080/amazon/category/get")
  }
}
