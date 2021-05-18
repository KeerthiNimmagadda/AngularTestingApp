import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiiService } from '../restapii.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  obj:any;
  constructor(private ar:ActivatedRoute,private o:RestapiiService) { }
  
  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.o.getinfor(id).subscribe(
      details=>{
        this.obj=details;
      },
      err=>{
        console.log("Error",err)
      }
    )
  }


}
