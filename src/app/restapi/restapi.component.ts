import { Component, OnInit,OnDestroy } from '@angular/core';
import { RestapiiService} from '../restapii.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  constructor(private dsobj:RestapiiService) { }
  myinfo:any;
  myposts:any;
  x:Subscription;
  y:Subscription;
  ngOnInit(): void {
    this.x=this.dsobj.getinfo().subscribe(
      infodata=>{
        this.myinfo=infodata;
      },
      err=>{
        console.log("Error:",err);
      }
    )
    this.y=this.dsobj.getposts().subscribe(
      postsdata=>{
        this.myposts=postsdata;
      },
      err=>{
        console.log("Error:",err);
      }
    )}
    ngOnDestroy(){
      this.x.unsubscribe();
      this.y.unsubscribe();
    }
  }


