import { Component, OnInit } from '@angular/core';
import {VnpayService} from "../../../service/outputInvoiceService/vnpay.service";
import {OrderService} from "../../../service/outputInvoiceService/order.service";


@Component({
  selector: 'app-vnpay',
  templateUrl: './vnpay.component.html',
  styleUrls: ['./vnpay.component.css']
})
export class VNPayComponent implements OnInit {
  orderTotal: number;
  orderInfo: string;
  formattedOrderTotal: string;
  constructor(private vnpayService: VnpayService,
              private orderService: OrderService) {

  }
  ngOnInit() {
    this.orderTotal = this.orderService.getData();
    this.formattedOrderTotal = this.formatCurrency(this.orderTotal);
  }

  // The function redirects to the payment execution page
  submitOrder() {
    console.log('before' + this.orderTotal);
    this.vnpayService.submitOrder(this.orderTotal, this.orderInfo).subscribe(
      (response) => {
        if (response && response.vnpayUrl) {
          window.location.href = response.vnpayUrl;
        } else {
        }
      },
      (error) => {
      }
    );
  }
  private formatCurrency(num: number): string {
    return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

}
