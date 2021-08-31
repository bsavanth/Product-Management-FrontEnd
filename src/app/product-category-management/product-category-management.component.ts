import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategoryService } from '../Service/product-category.service';

@Component({
  selector: 'app-product-category-management',
  templateUrl: './product-category-management.component.html',
  styleUrls: ['./product-category-management.component.css']
})
export class ProductCategoryManagementComponent implements OnInit {

  prodCatService : ProductCategoryService
  editVisible = false;
  prodCat:ProductCategory = new ProductCategory();
  products:any;

  viewVisible = false;
  addVisible = false;
  delVisible = false;
  updateVisible = false;

  ToggleView():void
  {
    this.GetProductCategories();
    this.viewVisible = !this.viewVisible;
    this.addVisible = false;
    this.delVisible = false;
    this.updateVisible = false;
  }

  ToggleAdd():void
  {
    this.updateVisible = false;
    this.addVisible = true;
    this.GetProductCategories();
    this.viewVisible = true;
  }

  ToggleDel():void{
    this.viewVisible = false;
    this.addVisible = false;
    this.GetProductCategories();
    this.delVisible = true;
    this.updateVisible = false;

  }

  ToggleUpdate():void{
    this.viewVisible = false;
    this.addVisible = false;
    this.delVisible = false;
    this.GetProductCategories();
    this.updateVisible = true;

  }

  constructor(  prodCatSer : ProductCategoryService)
 {
    this.prodCatService = prodCatSer;
  
  }

  ngOnInit(): void {
  }
  GetProductCategories():void {

    this.prodCatService.ViewAll().subscribe

    (  
      (p:{}) => 
      {
        this.products = p;
        console.log(this.products);
      }
    );

  }

  AddProductCategory(form:NgForm):void {

    
    console.log(form.value);

    this.prodCatService.AddProductCategory(form).subscribe

    (
      () => 
      {
        alert("Add successfull");
        this.GetProductCategories();
      }

    );

    this.addVisible = false;
  }

  UpdateProductCategory(producat: ProductCategory):void {

    this.prodCat = producat;
    console.log(this.prodCat);
    this.editVisible = true;
  }

  EditProductCategory(form:NgForm):void
  {
    this.editVisible = false;
    this.GetProductCategories();
    this.updateVisible = false;

    form.value.cid = Number(this.prodCat.cid);

    console.log(form.value)
    this.prodCatService.UpdateProductCategory(form).subscribe
    (
      () => 
      {
        alert("Update successfull");
      }

    );  

    this.editVisible = false;
    this.GetProductCategories();
    this.updateVisible = false;

  }
  

    DeleteProductCategory(cid:number):void {

      this.prodCatService.DeleteProductCategory(cid).subscribe
  
      (
        () => 
        {
          alert("Delete successfull");
          this.GetProductCategories();
        }
  
      );  

    }


}


export class ProductCategory{

  cid: number;
  catName: string;

  constructor()
  {
    this.cid = 0;
    this.catName = '';
  }

}