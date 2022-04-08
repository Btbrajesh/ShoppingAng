import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[] = [];
  categoryDetail: Category = {
    catId: 0,
    categoryName: ''
  };

  categoryData = this.fb.group({
    categoryName: [' ', Validators.required]
  })
  constructor(private categoryService: CategoryService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllCategory();
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

  getCategoryById(catId: number) {
    this.categoryService.getCategoryById(catId).subscribe((res: any) => {
      if (res != null) {
        this.categoryDetail = res.data;
        this.categoryData.get('categoryName')?.setValue(res.data.categoryName);
      }
    })
  }

  editCategoryById() {
    this.categoryService.updateCategory(this.categoryDetail.catId, this.categoryData.value).subscribe((res: any) => {
      if (res.isSuccess) {
        document.getElementById("btnClose")?.click();
        alert('Category updated successfully!');
      } else {
        this.categoryData.markAllAsTouched();
      }
    })
  }

  addCategory(){
    this.categoryService.addCategory(this.categoryData.value).subscribe((addCategory : any) =>{
      if(addCategory.isSuccess){
        document.getElementById("btnClose")?.click();
        alert('Category added successfully'); 
      }
      else {
        this.categoryData.markAllAsTouched();
      }
    })
  } 

}
