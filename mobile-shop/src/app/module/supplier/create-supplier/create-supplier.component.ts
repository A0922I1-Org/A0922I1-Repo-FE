import { Component, OnInit } from '@angular/core';
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
  constructor(private supplierService: SupplierService, private router: Router) {
    this.supplierForm = new FormGroup({
      supplierId: new FormControl(),
      supplierName: new FormControl('',
        [Validators.required,
          Validators.maxLength(50),
          // tslint:disable-next-line:max-line-length
          Validators.pattern('^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$')
        ]),
      supplierPhone: new FormControl('', [
        Validators.required,
        Validators.pattern('([\\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})')
      ]),
      supplierEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9@.]+$')

      ]),

      supplierAddress: new FormControl('', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$')
      ])
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.supplier = this.supplierForm.value;
    if (this.supplierForm.valid) {
      this.supplierService.addNewSupplier(this.supplierForm.value).subscribe(() => this.supplierForm.reset());
    }

  }
  checkValid(field: string) {
    return (this.supplierForm.get(field).touched);
  }
  get supplierName() {
      return this.supplierForm.get('supplierName');


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

}
