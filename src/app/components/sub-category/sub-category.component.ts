import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subCategory';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  categoryList :Category[] =[];
subCategoryList :SubCategory[] =[];
subCategoryDetail: SubCategory = {
  catId: 0,
  subCategoryName: '',
  subCatId :0
};

subCategoryData = this.fb.group({
  subCategoryName : ['', Validators.required],
  catId :0
})
  constructor(private subCategoryService : SubCategoryService , private fb: FormBuilder,private categoryService :CategoryService) { }

  ngOnInit(): void {
    this.getAllSubCategory();
    this.getAllCategory();
  }

  getAllSubCategory(){
    this.subCategoryService.getSubCategory().subscribe((subCategories :any) =>{
      if(subCategories.isSuccess){
        this.subCategoryList = subCategories.data;
      }else {
        //Do something
      }
    })

  }

  getSubCategoryById(subCatId : number){
    this.subCategoryService.getSubCategoryById(subCatId).subscribe((res :any) =>{
      if(res != null){
        this.subCategoryDetail = res.data;
        this.subCategoryData.get('subCategoryName')?.setValue(res.data.subCategoryName);
      }
    })
  }

  editSubCategoryById(){
    this.subCategoryService.updateSubCategory(this.subCategoryDetail.subCatId,this.subCategoryData.value).subscribe((res : any)=>{
      if (res.isSuccess) {
        document.getElementById("btnClose")?.click();
        alert('Updated subCategory successfully!');
      } else {
        this.subCategoryData.markAllAsTouched();
      }
    })
  }

  AddSubCategory(){
    this.subCategoryService.addSubCategory(this.subCategoryData.value).subscribe((addSubCategory :any) =>{
      if(addSubCategory.isSuccess){
        document.getElementById("btnClose")?.click();
        alert('SubCategory added successfully'); 
      }
      else {
        this.subCategoryData.markAllAsTouched();
      }
    })
  }

  getAllCategory() {
    this.categoryService.getCategory().subscribe((categories: any) => {
      if (categories.isSuccess) {
        this.categoryList = categories.data;
      } else {
        //do something
      }

    })
  }

}
