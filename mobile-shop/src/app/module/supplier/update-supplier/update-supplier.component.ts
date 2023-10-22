import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Supplier} from '../../../model/supplier';
import {SupplierService} from '../../../service/supplier-service/supplier.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {


  supplierForm: FormGroup;
  supplier: Supplier;
  supplierId: number;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private formBuilder: FormBuilder, private supplierService: SupplierService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.supplierId = +paramMap.get('id');
console.log(this.supplierId);
      this.supplierService.findBySupplierId(this.supplierId).subscribe(supplier => {
        console.log(supplier);
        this.supplierForm = new FormGroup({
          supplierId: new FormControl(supplier.supplierId),
          supplierName: new FormControl(supplier.supplierName,
            [Validators.required,
              Validators.maxLength(50),
              // tslint:disable-next-line:max-line-length
              Validators.pattern('^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$')
            ]),
          supplierPhone: new FormControl(supplier.supplierPhone, [
            Validators.required,
            Validators.pattern('([\\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})')
          ]),
          supplierEmail: new FormControl(supplier.supplierEmail, [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9@.]+$')

          ]),

          supplierAddress: new FormControl(supplier.supplierAddress, [
            Validators.required,
            // tslint:disable-next-line:max-line-length
            Validators.pattern('^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$')
          ])
        });
      });
    });


  }

  ngOnInit(): void {
  }

  getSupplier(id: number) {
    return this.supplierService.findBySupplierId(this.supplierId).subscribe(supplier => {
    });
  }
  onUpdate() {
    this.supplier = this.supplierForm.value;
    if (this.supplierForm.valid) {
      this.supplierService.updateSupplier(this.supplierForm.value).subscribe(() => this.supplierForm.reset());

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
