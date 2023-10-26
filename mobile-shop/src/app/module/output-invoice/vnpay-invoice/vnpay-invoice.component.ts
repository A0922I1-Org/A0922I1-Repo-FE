import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vnpay-invoice',
  templateUrl: './vnpay-invoice.component.html',
  styleUrls: ['./vnpay-invoice.component.css']
})
export class VnpayInvoiceComponent implements OnInit {
  vnpAmount: string;
  vnpBankCode: string;
  vnpOrderInfo: string;
  vnpPayDate: string;
  vnpResponseCode: string;
  vnTransactionNo: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.vnpAmount = params.vnp_Amount;
      this.vnpBankCode = params.vnp_BankCode;
      this.vnpOrderInfo = params.vnp_OrderInfo;
      this.vnpPayDate = params.vnp_PayDate;
      this.vnpResponseCode = params.vnp_ResponseCode;
      this.vnTransactionNo = params.vnp_TransactionNo;
    });
  }

  convertAmount(value: string): string {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      return (numericValue / 100).toString();
    } else {
      return value;
    }
  }

}
