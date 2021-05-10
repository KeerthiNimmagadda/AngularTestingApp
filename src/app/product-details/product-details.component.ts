import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

import {product} from '../model/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
@Input() comp:product;
@Output() e=new EventEmitter();
send(i){
  this.e.emit(i);
}


}
