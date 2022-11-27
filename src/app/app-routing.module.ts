import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CreateProductFormComponentModule } from './components/create-product-form/create-product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'categories', component: CategoriesComponent }, {
    path: 'create', component: CreateProductFormComponent }]), CategoriesComponentModule, CategoriesServiceModule, CreateProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
