import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateProductFormComponent } from './create-product-form.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterLink],
  declarations: [CreateProductFormComponent],
  providers: [],
  exports: [CreateProductFormComponent]
})
export class CreateProductFormComponentModule {
}
