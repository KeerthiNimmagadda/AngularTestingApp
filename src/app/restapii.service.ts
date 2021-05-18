import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestapiiService {

  constructor(private obj:HttpClient) {

   }
   getinfo():Observable<any>{
    return this.obj.get<any>("https://jsonplaceholder.typicode.com/users");
  }
   getposts():Observable<any>{
     return this.obj.get<any>("https://reqres.in/api/unknown");
   }
   //db.json data
   getuser():Observable<any>{
     return this.obj.get<any>("http://localhost:3000/details")
   
  }
  getinfor(id):Observable<any>{
    return this.obj.get<any>(" http://localhost:3000/details/"+id);
  }
}
