import {Component, Input, OnInit} from '@angular/core';
import {InputInvoiceDetailService} from '../../../service/input-invoice/input-invoice-detail.service';
import {InputInvoiceDetail} from '../../../model/input-invoice-detail';
import {Page} from '../../../model/page';

@Component({
  selector: 'app-input-invoice-detail-list',
  templateUrl: './input-invoice-detail-list.component.html',
  styleUrls: ['./input-invoice-detail-list.component.css']
})
export class InputInvoiceDetailListComponent implements OnInit {
// hien thi list va phan trang
  page: Page<InputInvoiceDetail>;
  inputInvoiceList: InputInvoiceDetail[];

  constructor(private inputInvoiceService: InputInvoiceDetailService) {
    this.inputInvoiceService.getInputInvoiceList(0).subscribe(
      next => {
       this.inputInvoiceList = next.content;
       this.page = next;
    }
    );
    console.log(this.inputInvoiceList);
  }

  ngOnInit(): void {
  }

  getInputDetail(pageNo: number) {
    this.inputInvoiceService.getInputInvoiceList(pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next;
      }
    );
    console.log(this.inputInvoiceList);
  }
}
