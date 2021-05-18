import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   mobiles=[
     {
      name:"Redmi 9",
     image:"https://images-na.ssl-images-amazon.com/images/I/61Ox1fNOgcL._SL1200_.jpg",
      Mrp: 12999
    },
     {
      name:"Mi 10i 5G",
      image:"https://images-na.ssl-images-amazon.com/images/I/71MHS6Rbj2L._SL1500_.jpg",
      Mrp: 23999
    },
    {
      name:"Oppo F19 Pro",
      image:"https://images-na.ssl-images-amazon.com/images/I/713wQuzKP7L._SL1500_.jpg",
      Mrp: 21490
    },
    {
      name:"Samsung  M51",
      image:"https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-6gb-sm-m515fzbdins-sm-m---fzbeins-thumb-304622854?$LazyLoad_Home_IMG$",
      Mrp: 12499
    },
    {
      name:"OnePlus 8T",
       image:"https://images-na.ssl-images-amazon.com/images/I/61oDpGk8uYL._SL1500_.jpg",
      Mrp: 45999
    },
    {
      name:"Vivo v20",
      image:"https://st1.bgr.in/wp-content/uploads/2020/11/620dcfabcdb96d4bede503a7a22ed204-1.jpg",
      Mrp: 22999
    },
    
  ];
}

