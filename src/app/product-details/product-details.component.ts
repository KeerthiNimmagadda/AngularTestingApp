import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

import {product} from '../model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
@Input() prod:product;
@Output() e=new EventEmitter();
send(i){
  this.e.emit(i);
}


}
