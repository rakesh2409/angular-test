import { MessageService } from 'primeng/api';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../sales/sales.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productForm: FormGroup;
  date: Date;
  maxNumber = new RegExp('^[0-9]{13}$');

  @Input() productInfo?: Data;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // productForm initialization
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.maxLength(50)]],
      productID: ['', [Validators.required, Validators.pattern(this.maxNumber)]],
      productManager: [''],
      salesStartDate: ['', [Validators.required, Validators.maxLength(10)]],
      salesQ1: [''],
      salesQ2: [''],
      salesQ3: [''],
      salesQ4: ['']
    });
  }

  // productName
  get productName() {
    return this.productInfo?.productName;
  }

  // getter productID
  get productId() {
    return this.productInfo?.productID;
  }

  // getter salesQ1
  get salesQ1() {
    return this.productInfo?.salesQ1;
  }

  // getter salesQ2
  get salesQ2() {
    return this.productInfo?.salesQ2;
  }

  // getter salesQ3
  get salesQ3() {
    return this.productInfo?.salesQ3;
  }

  // getter salesQ4
  get salesQ4() {
    return this.productInfo?.salesQ4;
  }

  // submit form
  submit(value) {
    if (!!value) {
      localStorage.setItem('newProduct', JSON.stringify(value));
      this.showSuccess();
      this.clearForm();
    }
  }

  // showSucccess toast
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submitted successfully' });
  }

  // clearForm values
  clearForm() {
    this.productForm.reset()
    // reset the errors of all the controls
    for (let name in this.productForm.controls) {
      this.productForm.controls[name].setErrors(null);
    }
  }


}
