import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {

  
televisions=[
  {
      name:"Haier",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1613993928/Croma%20Assets/Entertainment/Television/Images/232859_rakdhy.png",
      Mrp: 82999
    },
    {
      name:"Samsung 81",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1605303289/Croma%20Assets/Entertainment/Television/Images/8940241354782.png",
      Mrp: 87999
    },
    {
      name:"Sanyo",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1618902181/Croma%20Assets/Entertainment/Television/Images/233052_qvu5du.png",
      Mrp: 23999
    },
    {
    
      name:"Sony Bravia",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1610603169/Croma%20Assets/Entertainment/Television/Images/32W6100-01_uktndu.png",
      Mrp: 49499
    },
    {
      name:"LG TV",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1605327183/Croma%20Assets/Entertainment/Television/Images/8956317106206.png",
      Mrp: 45999
    },
    
    {
      name:"CROMA",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1618463332/Croma%20Assets/Entertainment/Television/Images/233702_vlutov.png",
      Mrp: 34490
    },
    
    
  ];
}

