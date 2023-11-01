  import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
  import {Page} from '../../../model/page';
  import {Supplier} from '../../../model/supplier';
  import {SupplierService} from '../../../service/supplier-service/supplier.service';
  import Swal from "sweetalert2";
  import {ScrollUpService} from "../../../service/scroll-up.service";

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
  flag = 0;
  @ViewChild('view') view: ElementRef;


    constructor(private supplierService: SupplierService,
                private scrollUpService: ScrollUpService,
                private renderer: Renderer2) {
  }
  suppliers: Supplier [] = [];
  totalPages = 0;
  currentPage = 0;
  pageSize = 0;
  check: boolean;
  name: string;
  address: string;
  phone: string;
  sort: string;

  ngOnInit(): void {
    this.scrollUpService.getScrollObservable().subscribe(() => {
      this.scrollToTop();
    });
    // this.loadSuppliers(1, 8);
    this.getList('', '', '', '', true);
  }

  getList(name: string, address: string, phone: string, sort: string, check: boolean) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    if (sort === '') {
      sort = 'supplier_id';
    }
    this.sort = sort;
    if (check === true) {
      this.supplierService.getSuppliers(name, address, phone, 1, 8, sort, true).subscribe((response: any) => {
        if (response == null) {
          this.suppliers = [];
          this.totalPages = 0;
          this.currentPage = 0;
          this.pageSize = 0;
        } else {
          this.suppliers = response.content;
          this.totalPages = response.totalPages;
          this.currentPage = response.number;
          this.pageSize = response.size;
        }
      });
      this.check = check;
    } else if (check === false) {
      {
        this.supplierService.getSuppliers(name, address, phone, 1, 8, sort, false).subscribe((response: any) => {
          if (response == null) {
            this.suppliers = [];
            this.totalPages = 0;
            this.currentPage = 0;
            this.pageSize = 0;
          } else {
            this.suppliers = response.content;
            this.totalPages = response.totalPages;
            this.currentPage = response.number;
            this.pageSize = response.size;
          }
        });
        this.check = check;
      }
    }
  }

  onPrevPage() {
    if (this.currentPage > 0) {
      this.supplierService.getSuppliers(this.name, this.address, this.phone, this.currentPage,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.suppliers = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
    this.scrollUpService.scrollUp();
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.supplierService.getSuppliers(this.name, this.address, this.phone, this.currentPage + 2,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.suppliers = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
    this.scrollUpService.scrollUp();
  }

  loadSuppliers(pageNo: number, pageSize: number): void {
    this.supplierService.getAllSuppliers(pageNo, pageSize)
      .subscribe(data => {
        this.page = data;
      });
    this.scrollUpService.scrollUp();
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
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã xóa thành công',
      showConfirmButton: false,
      timer: 1500,
    });
    this.getList('', '', '', '', true);

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
    this.scrollUpService.scrollUp();
  }


  sortByName() {
    this.flag++;
    this.supplierService.sortByNameSupplier(this.flag.toString(), 1, 8)
      .subscribe(data => {
        this.page = data;
        this.isConfirmModalVisible = false;
      });
    this.scrollUpService.scrollUp();
  }

  sortById() {
    this.flag++;
    this.supplierService.sortByIdSupplier(this.flag.toString(), 1, 8)
      .subscribe(data => {
        this.page = data;
        this.isConfirmModalVisible = false;
      });
    this.scrollUpService.scrollUp();
  }

    //Để bấm nút chuyển trang thì tự lên top
    scrollToTop() {
      this.renderer.setProperty(document.body, 'scrollTop', 0);
      this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
    }
}
