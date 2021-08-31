import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {HttpHeaders} from "@angular/common/http"
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = "https://localhost:5001/api/Product/";

  
  constructor(private httpClient: HttpClient) { }

  public ViewAll()
  {
    return this.httpClient.get(this.SERVER_URL+"ViewAll"); 
  }

  public AddProduct(form:NgForm)
  {

    console.log(form.value);
    
    const httpOptions = 
    {

      headers:new HttpHeaders({ "Content-Type": "application/json" })

    };

    return this.httpClient.post(this.SERVER_URL+"AddProduct/", form.value, httpOptions);

  }  
  
  public UpdateProduct(form:NgForm)
  {

    const httpOptions = 
    {

      headers:new HttpHeaders({ "Content-Type": "application/json" })

    };

    return this.httpClient.put(this.SERVER_URL+"UpdateProduct/", form.value, httpOptions);

  }    
  
  public DeleteProduct(ID:number)
  {   

    return this.httpClient.delete(this.SERVER_URL+"DeleteProduct/"+ID);

  }    

  public SearchByCategory(Catname:string)
  {
    return this.httpClient.get(this.SERVER_URL+"SearchByCategory/"+Catname);
  }

  public CountByCategory()
  {
    return this.httpClient.get(this.SERVER_URL+"CountByCategory"); 
  }


}
