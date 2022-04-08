import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getCategory(){
    return this.http.get(`${environment.apiUrl}api/Category/GetCategoryList`);
  }

  getCategoryById(catId:number){
    return this.http.get(`${environment.apiUrl}api/Category/GetCategoryById/${catId}`);
  }

  addCategory(data :any){
    return this.http.post(`${environment.apiUrl}api/Category/AddCategory`,data);
  }

  updateCategory(catId:number,data:any){
    return this.http.put(`${environment.apiUrl}api/Category/UpdateCategory/${catId}`,data);
  }
}
