import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductInputDto} from '../../../dto/ProductInputDto';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InputInvoiceDetailService} from '../../../service/input-invoice-detail.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-input-invoice-add-new-form',
  templateUrl: './input-invoice-add-new-form.component.html',
  styleUrls: ['./input-invoice-add-new-form.component.css']
})
export class InputInvoiceAddNewFormComponent implements OnInit {
  // các thuộc tính để bật tắt các nút theo kết quả trả vê
  isNewProduct = false;
  formIsDone = false;
  // các thuộc tính để ẩn hiện các input tùy theo erro
  productNameErrorMessage: string;
  productNameHasError = false;
  costPriceHasError = false;
  quantityHasError = false;
  // tiếp nhận lỗi từ server trả về
  response: HttpErrorResponse;
  errorResponse: any;

  // tách riêng các trường ra để validate real time dưới backend
productToList: ProductInputDto;
productToListValidated: ProductInputDto;
inputDetailForm: FormGroup;
  constructor(private inputInvoiceService: InputInvoiceDetailService,
             ) {
    this.inputDetailForm = new FormGroup({
      productId: new FormControl(null),
      productName: new FormControl(null, [Validators.required]),
      costPrice: new FormControl(null, [Validators.required, Validators.min(1)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
    if (!this.isNewProduct) {
      this.inputDetailForm.get('productName').disable();
    }
  }

  ngOnInit() {
  }

  toggleIsNewProduct() {
    this.isNewProduct = !this.isNewProduct;
    if (!this.isNewProduct) {
      this.inputDetailForm.get('productName').disable();
      this.inputDetailForm.get('productName').setValue(null);
    } else {
      this.inputDetailForm.get('productName').enable();
      this.inputDetailForm.get('quantity').enable();
      this.inputDetailForm.get('costPrice').enable();
    }
    console.log(this.isNewProduct);
  }

  validateInputDetail() {

  }

  addToList() {
    // đầu tiên validate gởi về server
    this.productToList = this.inputDetailForm.value;
    if (!this.isNewProduct) {
      this.productToList.productName = '';
    }
    this.inputInvoiceService.validateInputDetail(this.productToList).subscribe(
      next => {
        // this.formIsDone = true;
        // pass thì thêm vào list phiếu
        this.productToListValidated = this.productToList;
        this.productNameHasError = false;
        this.inputDetailForm.reset();
      },
      fail => {
        this.formIsDone = false;
        this.response = fail;
        this.errorResponse = this.response.error;
        this.productNameHasError = true;
        // this.productNameErrorMessage = this.errorResponse.productName;
        console.log(this.productNameErrorMessage);
        console.log(this.productNameErrorMessage == null);
      }
    );
  }
}
