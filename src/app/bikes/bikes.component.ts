import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent{

  
bikes=[
  {
      name:"BMW s1000",
      image:"https://media.zigcdn.com/media/model/2020/Feb/s-100-rr_360x240.jpg",
      Mrp: 234490
    },
    {
      name:"KTM 125",
      productImage:"https://media.zigcdn.com/media/model/2020/Dec/125-duke-2021_360x240.jpg",
      Mrp: 152999
    },
    {
      name:"Roya Enfield",
      image:"https://media.zigcdn.com/media/model/2021/Feb/royal-enfield-himalayan-abc_360x240.jpg",
      Mrp: 223999
    },
    {
    
      name:"Bajaj",
      image:"https://media.zigcdn.com/media/model/2020/Jun/neon_360x240.jpg",
      Mrp: 73499
    },
    {
      name:"Honda",
      image:"https://media.zigcdn.com/media/model/2020/Jun/honda-activa-6g_360x240.jpg",
      Mrp: 45999
    },
    
    {
      name:"SUZUKI",
      image:"https://media.zigcdn.com/media/model/2021/Feb/2021-suzuki-hayabusa-abc_360x240.jpg",
      Mrp: 87999
    },
    
  ];
}

