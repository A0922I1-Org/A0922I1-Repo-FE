import { Component, OnInit } from '@angular/core';
import {Page} from '../../model/page';
import {Supplier} from '../../model/supplier';
import {SupplierService} from '../../service/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  page: Page<Supplier>;

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.loadSuppliers(1, 8);
  }

  loadSuppliers(pageNo: number, pageSize: number): void {
    this.supplierService.getAllSuppliers(pageNo, pageSize)
      .subscribe(data => {
        this.page = data;
      });
  }
}
