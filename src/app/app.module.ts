import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    ProductsComponent,
    ProductDetailsComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProductComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
