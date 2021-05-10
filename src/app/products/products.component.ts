import { Component, OnInit } from '@angular/core';
import {product} from '../model/products.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  list:product[]=[
    {
      name:"Dell G3 15 Gaming Laptop 10th Generation Intel® Core™ i7-10750H",
    image:"https://i.dell.com/sites/csimages/Banner_Imagery/all/Dell-G3-3500.png" ,
    price:"99,989/-"
    },
    {
      name:"Inspiron 13 Laptop Intel® Iris® Xe Graphics with shared graphics memory",
      image:"https://i.dell.com/sites/csimages/Banner_Imagery/all/Inspiron-13-5301-laptop.png",
      price:"64,000/-"
    },
    {
      name:"XPS 15 Laptop 11th Generation Intel® Core™ i7-1185G7 Processor",
      image:"https://i.dell.com/sites/csimages/Banner_Imagery/all/XPS-15-9500.png"  ,
      price:"1,99,000/-"
    },
    {
      name:"Inspiron 13 2-in-1 Laptop 11th Generation Intel® Core™ i5-1135G7 Processor",
      image:"https://i.dell.com/sites/csimages/Banner_Imagery/all/Inspiron-13-7306-2in1.png"  ,
      price:"79,000/-"
    },
    {
      name:"XPS 17 Laptop 10th Generation Intel® Core™ i7-10750H High Quality",
      image:"https://i.dell.com/sites/csimages/Banner_Imagery/all/XPS-17-9700.png" ,
      price:"2,29,990/-"
    },
    {
      name:"New Vostro 15 3501 Laptop 10th Generation Intel Core™ i3-1005G1 Processor",
      image:"https://i.dell.com/sites/csimages/Banner_Imagery/all/Vostro-3501.png ",
      price:"37,489/-"
    }

  ];
  cart=[];
  count=0;
  cartproduct(it)
  {
    this.cart.push(it);
    console.log(this.cart);
    this.count++;
  }
}
