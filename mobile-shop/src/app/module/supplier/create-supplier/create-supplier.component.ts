import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Supplier} from '../../../model/supplier';
import {SupplierService} from '../../../service/supplier-service/supplier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  supplierForm: FormGroup;
  supplier: Supplier;
  // tslint:disable-next-line:ban-types
  errorData: Map<String , string[]> = new Map();
  textLower = '';
  public phoneVN = /^(0[1-9]\d{8})$/;
  public vietnamese = /^[a-zA-Z0-9-()*_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$/;
  public emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
  @ViewChild('successNotification') successNotification: ElementRef;


  constructor(private supplierService: SupplierService, private router: Router) {
    this.supplierForm = new FormGroup({
      supplierId: new FormControl(),
      supplierName: new FormControl('',
        [Validators.required,
          Validators.maxLength(50),
          Validators.pattern(this.vietnamese)
        ]),
      supplierPhone: new FormControl('', [
        Validators.required,
        Validators.pattern(this.phoneVN)
      ]),
      supplierEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),

      supplierAddress: new FormControl('', [
        Validators.required,
        Validators.pattern(this.vietnamese)
      ])
    });
  }

  ngOnInit(): void {}

    onSubmit() {

  this.supplier = this.supplierForm.value;
  if (this.supplierForm.valid) {
      this.supplierService.addNewSupplier(this.supplierForm.value).subscribe(
        next => {
          this.successNotification.nativeElement.style.display = 'block';
          setTimeout(() => {
            this.successNotification.nativeElement.style.display = 'none';
            this.router.navigateByUrl('/supplier');
          }, 3000);
        },
          (error) => {
            {this.errorData = error.error; }
          }
      );
  }
  }
  checkValid(field: string) {
    return (this.supplierForm.get(field).touched);
  }
  get supplierName() {
      return this.supplierForm.get('supplierName');
  }
  hideError(hideError: string) {
    this.errorData[hideError] = null;
  }
  get supplierPhone() {
      return this.supplierForm.get('supplierPhone');
  }
  get supplierEmail() {

      return this.supplierForm.get('supplierEmail');
  }
  get supplierAddress() {

      return this.supplierForm.get('supplierAddress');
  }

  textToLower(event: any) {
    this.textLower = event.toLowerCase();
  }
  }
