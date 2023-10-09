import {Component, OnInit} from '@angular/core';
import {Page} from '../../../model/page';
import {Supplier} from '../../../model/supplier';
import {SupplierService} from '../../../service/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  page: Page<Supplier>;
  supplierToDelete: Supplier;
  isConfirmModalVisible = false;
  searchName = '';
  searchAddress = '';
  searchPhone = '';

  constructor(private supplierService: SupplierService) {
  }

  ngOnInit(): void {
    this.loadSuppliers(1, 8);
  }

  loadSuppliers(pageNo: number, pageSize: number): void {
    this.supplierService.getAllSuppliers(pageNo, pageSize)
      .subscribe(data => {
        this.page = data;
      });
  }

  showDeleteConfirmModal(supplier: Supplier): void {
    this.supplierToDelete = supplier;
    this.isConfirmModalVisible = true;
  }

  hideDeleteConfirmModal(): void {
    this.isConfirmModalVisible = false;
  }

  confirmDeleteSupplier(): void {
    const supplierId = this.supplierToDelete.supplierId;
    this.supplierService.deleteSupplier(supplierId).subscribe(() => {});
    this.hideDeleteConfirmModal();
    alert('xoá nhà cung cấp thành công');
    this.loadSuppliers(1, 8);

  }

  search() {
    console.log('searchName:', this.searchName);
    console.log('searchAddress:', this.searchAddress);
    console.log('searchPhone:', this.searchPhone);

    this.supplierService.searchSuppliers(this.searchName, this.searchAddress, this.searchPhone, 1, 8)
      .subscribe(data => {
        this.page = data;
        this.isConfirmModalVisible = false;
      });
  }
}
