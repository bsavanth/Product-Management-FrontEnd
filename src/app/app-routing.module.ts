import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductManagementComponent} from './product-management/product-management.component'
import { ProductCategoryManagementComponent } from './product-category-management/product-category-management.component';

const routes: Routes = [ {path:"Product", component: ProductManagementComponent}, {path: "ProductCategory", component:ProductCategoryManagementComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
