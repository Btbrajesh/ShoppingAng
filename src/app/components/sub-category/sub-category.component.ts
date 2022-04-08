import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
subCategoryList :[] =[];

subCategoryData = this.fb.group({
  subCategoryName : ['', Validators.required]
})
  constructor(private subCategoryService : SubCategoryService , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllSubCategory();
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
        this.subCategoryList = res.data;
        this.subCategoryData.get('subCategoryName')?.setValue(res.data.subCategoryName);
      }
    })
  }

}
