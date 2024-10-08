import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentComponent } from './apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailProductComponent,
    ResidenceComponent,
    FormResidenceComponent,
    ApartmentComponent,
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
