import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {HttpHeaders} from "@angular/common/http"
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private SERVER_URL = "https://localhost:5001/api/ProductCategory";
  
  data : any;
   
  constructor(private httpClient: HttpClient)
  { 

  }

  
  public ViewAll()
  {
      return this.httpClient.get(this.SERVER_URL+"/ViewAll"); 
  }

  public AddProductCategory(form:NgForm)
  {
    
    const httpOptions = {
    
      headers: new HttpHeaders({ "Content-Type" : "application/json" })

    };
    
    return this.httpClient.post(this.SERVER_URL+"/AddProductCategory/", form.value, httpOptions);

  }  
  
  public UpdateProductCategory(form:NgForm)
  {

    const httpOptions = {
    
      headers: new HttpHeaders({ "Content-Type" : "application/json" })

    };

    return this.httpClient.put(this.SERVER_URL+"/UpdateProductCategory/", form.value, httpOptions);

  }    
  
  public DeleteProductCategory(CID:number)
  {   

    return this.httpClient.delete(this.SERVER_URL+"/DeleteProductCategory/"+CID);

  }    
  
}
