import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CategoriesComponent } from './categories.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatChipsModule, CommonModule, MatCardModule, RouterLink],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
