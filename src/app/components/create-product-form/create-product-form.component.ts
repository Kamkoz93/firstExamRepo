import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateProductFormService } from '../../services/create-product-form.service';

@Component({
  selector: 'app-create-product-form',
  styleUrls: ['./create-product-form.component.scss'],
  templateUrl: './create-product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductFormComponent {
  readonly createProductForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl()
  });

  constructor(private _createProductFormService: CreateProductFormService) {
  }

  onCreateProductFormSubmitted(createProductForm: FormGroup): void {
    this._createProductFormService.createProduct({
      title: createProductForm.get('title')?.value,
      price: createProductForm.get('price')?.value}
    ).subscribe();
  }
}
