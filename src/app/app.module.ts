import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
 
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

 
 const appRoutes:Routes =[{
  path:'home',component:HomeComponent
 },{
  path:'seller',component:SellerComponent
 },{
  path:'login',component:LoginComponent
 },{
  path:'register',component:RegisterComponent
 }

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BuyerComponent,
    SellerComponent,
    HomeComponent,
    
 
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
