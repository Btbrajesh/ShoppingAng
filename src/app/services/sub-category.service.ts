import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http : HttpClient) { }

  getSubCategory(){
   return this.http.get(`${environment.apiUrl}api/SubCategory/GetSubCategoryList`);
  }

  getSubCategoryById(subCatId : number){
   return this.http.get(`${environment.apiUrl}api/SubCategory/GetSubCategoryById/${subCatId}`);
  }

  addSubCategory(data : any){
    return this.http.post(`${environment.apiUrl}api/SubCategory/AddSubCategory`,data);
  }

  updateSubCategory(subCatId : number,data : any){
    return this.http.put(`${environment.apiUrl}api/SubCategory/UpdateSubCategory/${subCatId}`,data);
  }
}
