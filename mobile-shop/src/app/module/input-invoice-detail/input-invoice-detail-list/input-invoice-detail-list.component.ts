import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {InputInvoiceDetailService} from '../../../service/input-invoice/input-invoice-detail.service';
import {InputInvoiceDetail} from '../../../model/input-invoice-detail';
import {Page} from '../../../model/page';
import {ScrollUpService} from "../../../service/scroll-up.service";

@Component({
  selector: 'app-input-invoice-detail-list',
  templateUrl: './input-invoice-detail-list.component.html',
  styleUrls: ['./input-invoice-detail-list.component.css']
})
export class InputInvoiceDetailListComponent implements OnInit {
// hien thi list va phan trang
  page: Page<InputInvoiceDetail>;
  inputInvoiceList: InputInvoiceDetail[];

  //Lưu giá trị search từ input để gởi về server
  supplierName = '';
  productName = '';
  startDate = '';
  endDate = '';
  isSearch = false;

  constructor(private inputInvoiceService: InputInvoiceDetailService,
              private scrollUpService: ScrollUpService,
              private renderer: Renderer2) {
    this.scrollUpService.getScrollObservable().subscribe(() => {
      this.scrollToTop();
    });
    this.getInputDetail(0);
  }

  ngOnInit(): void {
  }

  getInputDetail(pageNo: number) {
    this.inputInvoiceService.getInputInvoiceList(this.supplierName, this.productName, this.startDate, this.endDate, pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next;
      }
    );
    console.log(this.isSearch);
    this.scrollUpService.scrollUp();
  }

  cancelSearch(pageNo: number) {
    this.supplierName = '';
    this.productName = '';
    this.startDate = '';
    this.endDate = '';
    this.inputInvoiceService.getInputInvoiceList(this.supplierName, this.productName, this.startDate, this.endDate, pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next;
        this.isSearch = false;
      }
    );
    this.scrollUpService.scrollUp();
  }

  search(pageNo: number) {
    this.inputInvoiceService.search(this.supplierName, this.productName, this.startDate, this.endDate, pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next
        if (this.supplierName != '' || this.productName != '' || this.startDate != '' || this.endDate != '') {
          this.isSearch = true;
        }
      }
    )
    this.scrollUpService.scrollUp();
  }

//Để bấm nút chuyển trang thì tự lên top
  scrollToTop() {
    this.renderer.setProperty(document.body, 'scrollTop', 0);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
}
