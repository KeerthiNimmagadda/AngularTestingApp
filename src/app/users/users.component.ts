import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiiService } from '../restapii.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private ob:RestapiiService) { }
  list:any;
  ngOnInit(): void {
    this.ob.getuser().subscribe(
      post=>{
        this.list=post;
      },
      err=>{
        console.log("error",err)
      }
    )
  }
  onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  }

}
