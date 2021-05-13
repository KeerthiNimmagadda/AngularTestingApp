import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent,children:[
    {path:'mobiles',component:MobilesComponent},
    {path:'bikes',component:BikesComponent},
    {path:'televisions',component:TelevisionsComponent},
    {path:'',redirectTo:'/product/mobiles',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
