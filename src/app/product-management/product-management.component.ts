import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Service/product.service';
import { ProductCategoryService } from '../Service/product-category.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  prodService : ProductService;
  prodCatService: ProductCategoryService;
  products:any;
  categories:any;

  prod: Product = new Product();
  dateMessage ='';
  validDate = false;
  

  viewVisible = false;
  addVisible = false;
  deleteVisible = false;
  updateView = false;
  updateVisible = false;
  editVisible = false;
  searchView = false;
  searchVisible = false;
  countView = false;
  countVisible = false;

  ToggleView():void
  {
    console.log("Reached View toggle");
    this.getProducts(this.prodService);
    this.viewVisible = !this.viewVisible;
    this.addVisible = false;
    this.deleteVisible = false;
    this.updateView = false;
    this.updateVisible = false;
    this.searchVisible = false;
    this.searchView = false;
    this.countView = false;
    this.countVisible = false;
  }


  ToggleAddView():void
  {
    console.log("Reached Add toggle");

    this.getProducts(this.prodService);
    this.viewVisible = false;
    this.addVisible= true;
    this.deleteVisible = false;
    this.updateView = false;
    this.updateVisible = false;
    this.searchVisible = false;
    this.searchView = false;
    this.countView = false;
    this.countVisible = false;
  }

  ToggleDelete():void
  {

    console.log("Reached delete toggle");

    this.getProducts(this.prodService);
    this.deleteVisible = true;
    this.viewVisible = false;
    this.addVisible= false;
    this.updateView = false;
    this.updateVisible = false;
    this.searchVisible = false;
    this.searchView = false;
    this.countView = false;
    this.countVisible = false;
  }


  ToggleUpdate():void{
    console.log("Reached update toggle");

    this.getProducts(this.prodService);
    this.deleteVisible = false;
    this.viewVisible = false;
    this.addVisible= false;
    this.updateVisible = false;
    this.updateView = true;
    this.searchVisible = false;
    this.searchView = false;
    this.countView = false;
    this.countVisible = false;
  }

  

  ToggleSearch():void
  {
    console.log("Reached search cat toggle");

    this.getProducts(this.prodService);
    this.deleteVisible = false;
    this.viewVisible = false;
    this.addVisible= false;
    this.updateView = false;
    this.updateVisible = false;
    this.searchVisible = false;
    this.searchView = true;
    this.countView = false;
    this.countVisible = false;
  }

  ToggleCount():void
  {
    console.log("Reached count cat toggle");

    this.getProducts(this.prodService);
    this.deleteVisible = false;
    this.viewVisible = false;
    this.addVisible= false;
    this.updateView = false;
    this.updateVisible = false;
    this.searchVisible = false;
    this.searchView = false;
    this.countView = true;
    this.countVisible = false;
  }
  

  
   
  

  constructor(  prodSer : ProductService, prodCatSer: ProductCategoryService)
 {
    this.prodService = prodSer;
    this.prodCatService = prodCatSer;
    this.getProducts(this.prodService);
    this.GetProductCategories(this.prodCatService);
   
    
  }

  GetProductCategories(prodServ:ProductCategoryService):void {

    console.log("reached get prods")
    this.prodCatService.ViewAll().subscribe

    (  
      (pc:{}) => 
      {
        this.categories = pc;
         
      }
    );

  }


 

  ngOnInit(): void {
  }
  getProducts(prodServ:ProductService):void {

    prodServ.ViewAll().subscribe

    (  
      (p:{}) => 
      {
        this.products = p;
       
      }
    );

  }

  AddProduct(form:NgForm):void {
   
    console.log("reached add prod")

    this.addVisible = false;
    form.value.cid = Number(form.value.cid);
  
    this.validateDate(form.value.expiryDate)

    if(form.value.quantity <=1)
    {
      alert("Quanity should be greatert than 1");
    }

    else if(form.value.quantity <=1)
    {
      alert("Quanity should be greatert than 1");
    }
    else if(this.validDate == false)
    {
      alert(this.dateMessage);
    }
    
    else{
    this.getProducts(this.prodService);
    this.prodService.AddProduct(form).subscribe

    (
      
      () => 
      {

        alert("Add Successfull");
        this.getProducts(this.prodService);
      }

    );

    this.viewVisible = true;
    this.validDate = false;

    }
  }

  validateDate(ckdate:any)
  {
    let d = new Date;
    if(new Date(ckdate).getTime() > d.getTime() )
    {
        this.validDate = true;
    }
    else{
      this.dateMessage = "Expiry Date must be greater than current date!";
    }
  }


  UpdateProduct(produ: Product):void {

    console.log("reached update prod")

    this.prod = produ;
    this.editVisible = true;
  }

  EditProduct(form:NgForm):void
  {
    console.log("reached edit prod ")

    this.editVisible = false;
    form.value.id = Number(this.prod.id);
    form.value.cid = Number(form.value.cid);
    
    this.validateDate(form.value.expiryDate)

    if(form.value.quantity <=1)
    {
      alert("Quanity should be greatert than 1");
    }

    else if(form.value.quantity <=1)
    {
      alert("Quanity should be greatert than 1");
    }
    else if(this.validDate == false)
    {
      alert(this.dateMessage);
    }

    else
    {

    this.prodService.UpdateProduct(form).subscribe
    (
      () => 
      {
        alert("Update Successfull");
        this.getProducts(this.prodService);
      }

    );  

    }

    this.validDate = false;

  }


  DeleteProduct(ID:number):void {
    console.log("")

    this.prodService.DeleteProduct(ID).subscribe

    (
      () => 
      {
        alert("Delete Successfull");
        this.getProducts(this.prodService);
      }

    );  

  }


  SearchByCategory(form:NgForm):void {
    console.log("Reached search prod consumer")

    this.searchView = false;
    
    
    this.prodService.SearchByCategory(form.value.catName).subscribe

    (  
      (p:{}) => 
      {
        this.products = p;
        

      }
    );

    this.getProducts(this.prodService);
    this.searchVisible = true;

  }

  CountByCategory(form:NgForm):void {
    console.log("Reached count cat consumer")

    this.countView = false;
    this.prodService.CountByCategory().subscribe

    (  
      (p:{}) => 
      {
        this.products = p;
       

      }
    );
    this.getProducts(this.prodService);
    this.countVisible =  true;

  }


}


export class Product
{
  id :number;
  name :string;
  cid: number;
  expiryDate: Date;
  quantity: number;
  price: number;

  constructor()
  {
    this.id =0;
    this.name = '';
    this.cid =0;
    this.expiryDate = new Date();
    this.quantity=0;
    this.price = 0;

  }
}