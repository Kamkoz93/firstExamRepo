import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {CreateProductFormComponentModule} from "./components/create-product-form/create-product-form.component-module";
import {CreateProductFormServiceModule} from "./services/create-product-form.service-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CreateProductFormServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
