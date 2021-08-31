import { Component } from '@angular/core';

import {ProductService} from './Service/product.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductManagementFrontEnd';

  constructor( )
  {

  }

  ngOnInit(): void {
  }
  

}
