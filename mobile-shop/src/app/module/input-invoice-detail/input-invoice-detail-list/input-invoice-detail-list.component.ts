import {Component, Input, OnInit} from '@angular/core';
import {InputInvoiceDetailService} from '../../../service/input-invoice-detail.service';
import {InputInvoiceDetail} from '../../../model/input-invoice-detail';

@Component({
  selector: 'app-input-invoice-detail-list',
  templateUrl: './input-invoice-detail-list.component.html',
  styleUrls: ['./input-invoice-detail-list.component.css']
})
export class InputInvoiceDetailListComponent implements OnInit {

  inputInvoiceList: InputInvoiceDetail[];

  constructor(private inputInvoiceService: InputInvoiceDetailService) {
    this.inputInvoiceService.getInputInvoiceList().subscribe(
      next => this.inputInvoiceList = next.content
    );
    console.log(this.inputInvoiceList);
  }

  ngOnInit(): void {
  }

}
