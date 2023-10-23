import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Swal from 'sweetalert2'
import {$} from "protractor";
import {PaymentService} from "../../../service/outputInvoiceService/payment.service";
import {OrderService} from "../../../service/outputInvoiceService/order.service";
import {ShareDataService} from "../../../service/outputInvoiceService/share-data.service";
import {CustomerDto} from "../../../dto/customer-dto";
import {ProductDto} from "../../../dto/product-dto";
import {OutputInvoice} from "../../../model/output-invoice";
import {OutputInvoiceDetail} from "../../../model/output-invoice-detail";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-sale-manager',
  templateUrl: './sale-manager.component.html',
  styleUrls: ['./sale-manager.component.css']
})
export class SaleManagerComponent implements OnInit {
  p = 1;
  totalAmount = 0;
  invoice = new OutputInvoice();
  invoiceDetailList: OutputInvoiceDetail[] = [];
  customer = new CustomerDto();
  productList: ProductDto[] = [];
  products = new ProductDto();
  errorMessage: string | null = null;
  isSubmitDisabled = false;
  radioSelected = false;
  isValidNumberInput = true;
  dataReceived = false;

  constructor(private paymentService: PaymentService,
              private orderService: OrderService,
              private shareData: ShareDataService,
              private router: Router) {
  }

  newProduct = {
    id: null, name: '', price: null, qty: null, subtotal: null
  };
  productForm: FormGroup = new FormGroup({
    productName: new FormControl(""),
    price: new FormControl(0),
    quantity: new FormControl(""),
  });

  onRadioChange() {
    this.radioSelected = true;
  }

  ngOnInit(): void {
    console.log('da init');
    this.productForm = new FormGroup({
      quantity: new FormControl([Validators.required, Validators.max(99), Validators.min(1)]),
    });
    this.loadCustomerData();
    this.loadProductData();
    const storedProductList = localStorage.getItem('productList');
    if (storedProductList) {
      this.productList = JSON.parse(storedProductList);
    }

    const storedTotalPrice = localStorage.getItem('totalPrice');
    if (storedTotalPrice) {
      this.totalAmount = parseFloat(storedTotalPrice);
    }
    this.productForm = new FormGroup({
      productId: new FormControl(),
      productName: new FormControl(),
      quantity: new FormControl(),
      price: new FormControl(),
    });
  }

  //get data
  getCustomer() {
    this.shareData.getCustomerData().subscribe(data => {
      if (data) {
        this.customer = data;
        this.dataReceived = true;
        this.saveCustomerData();
      }
    });
  }

  deleteCustomer() {
    this.shareData.getCustomer().subscribe(data => {
      if (data) {
        this.customer = data;
        this.dataReceived = false;
        this.saveCustomerData();
      }
    });
  }

  getCustomerAndDeleteCustomer() {
    this.getCustomer();
    this.deleteCustomer();
  }

  getProduct() {
    this.shareData.getProductData().subscribe(data => {
      if (data) {
        this.products = data;
      }
    });

  }

  // function save product in product list on local
  saveProduct() {
    const newProduct: ProductDto = {
      productId: this.products.productId,
      productName: this.products.productName,
      sellingPrice: this.products.sellingPrice,
      quantity: this.products.quantity,
      qty: this.newProduct.qty
    };

    const existingProduct = this.productList.find(product => product.productId === newProduct.productId);

    if (existingProduct) {
      const totalQty = parseInt(String(existingProduct.qty)) + parseInt(String(newProduct.qty));

      if (totalQty <= this.products.quantity) {
        existingProduct.qty = totalQty;
        this.isSubmitDisabled = false;
      } else {
        this.errorMessage = "Số lượng vượt quá tồn kho.";
        this.isSubmitDisabled = true;
      }
    } else {
      if (newProduct.qty <= this.products.quantity) {
        this.productList.push(newProduct);
      } else {
        this.errorMessage = "Số lượng vượt quá tồn kho.";
        this.isSubmitDisabled = true;
      }
    }
    this.calculateTotalAmount();
    localStorage.setItem('productList', JSON.stringify(this.productList));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalAmount));
    this.resetFormFields();
    localStorage.clear();
  }

  resetFormFields() {
    this.products.productId = null;
    this.products.productName = '';
    this.products.sellingPrice = null;
    this.products.quantity = null;
    this.newProduct.qty = null;
    this.errorMessage = '';
  }

  // function save invoice and invoice details into database
  savePayment() {
    console.log(this.productList)
    this.productList.forEach(res => {
      const invoiceDetail: OutputInvoiceDetail = new OutputInvoiceDetail();
      invoiceDetail.productDTO = {
        productId: res.productId,
        productName: res.productName,
        sellingPrice: res.sellingPrice,
        quantity: res.quantity,
        qty: res.qty,
      };
      invoiceDetail.productDTO.productId = res.productId;
      invoiceDetail.quantity = res.qty;
      this.invoiceDetailList.push(invoiceDetail);

    });
    this.paymentService.savePayment(this.customer, this.invoice.paymentMethod, this.invoiceDetailList).subscribe({
      next: res => {
        console.log('response: ' + res);
      }
    });

    // function clear data after payment success
    this.clearProductList();
    this.clearInvoiceDetailList();
    this.customer.customerId = null;
    this.customer.customerName = null;
    this.customer.customerPhone = null;
    this.customer.customerAddress = null;
    this.customer.customerEmail = null;
    localStorage.clear();

  }

  // sum functon
  calculateTotalAmount() {
    this.totalAmount = this.productList.reduce((total, product) => {
      return total + (product.sellingPrice * product.qty);
    }, 0);
  }

  // clear product list after payment success
  clearProductList() {
    this.productList.splice(0, this.productList.length);
    this.calculateTotalAmount();
  }

  // clear invoice details after payment success
  clearInvoiceDetailList() {
    this.invoiceDetailList.splice(0, this.invoiceDetailList.length);
  }

  // function delete product on local
  deleteProductByIndex(index
                         :
                         number
  ) {
    if (index >= 0 && index < this.productList.length) {
      this.productList.splice(index, 1); // Loại bỏ sản phẩm khỏi danh sách
      this.calculateTotalAmount();
      localStorage.setItem('productList', JSON.stringify(this.productList));
      localStorage.setItem('totalPrice', JSON.stringify(this.totalAmount));
    }
  }

  // function to transfer totalAmount data to VNPay
  VNPay() {
    const dataToSend = this.totalAmount;
    this.orderService.setData(dataToSend);
    this.router.navigate(['/vnpay']);
  }

//  function print invoice-pdf
// tslint:disable-next-line:typedef
  generatePDF(action = 'open') {
    const docDefinition = {
      content: [
        {
          text: 'Phone Shop',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'HÓA ĐƠN THANH TOÁN',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Khách Hàng',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: 'Tên khách hàng:  ' + this.customer.customerName,
                bold: true
              },
              {text: 'Số điện thoại:  ' + this.customer.customerPhone},
              {text: 'Địa chỉ:  ' + this.customer.customerAddress},
              {text: 'Email:  ' + this.customer.customerEmail},
            ],
            [
              {
                text: `Ngày thanh toán: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Hóa Đơn Số : ${((Math.random() * 1000000000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Sản Phẩm Đã Mua',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Tên sản phẩm', 'Giá', 'Số lượng', 'Tổng tiền'],
              ...this.productList.map(p => ([p.productName, p.sellingPrice, p.qty, (p.sellingPrice * p.qty).toFixed(2)])),
              [{
                text: 'Tổng tiền cần thanh toán',
                colSpan: 3
              }, {}, {}, this.productList.reduce((sum, p) => sum + (p.qty * p.sellingPrice), 0).toFixed(2)]
            ]
          }
        },
        {text: 'Hình thức thanh toán:  ' + this.invoice.paymentMethod},
        {
          columns: [
            [{
              qr: `${'Khang hang: '+this.customer.customerName +'\n'+ this.customer.customerPhone +'\n' + this.customer.customerAddress +'\n' + this.customer.customerAddress}`,
              fit: '80'
            }],
            [{text: 'Chữ ký', alignment: 'right', italics: true, margin: [0, 30, 30, 0]}],
          ]
        },
        {
          text: 'Các điều khoản và điều kiện',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Hoàn trả hoặc đổi mới miễn phí trong vòng 1 tháng nếu có sự cố',
            'Cam kết đúng mẫu mã, đúng nhà sản xuất',
            'Đảm bảo 100% chất lượng đạt tiêu chuẩn',
          ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

  savePaymentAndGeneratePDF() {
    this.generatePDF();
    this.savePayment();
  }

  // validator function

  isValidEmail(email: string):
    boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  isValidPhoneNumber(phoneNumber: string): boolean {
    const phoneNumberPattern = /^(0[0-9]{9,10}|84[0-9]{9})$/;
    return phoneNumberPattern.test(phoneNumber);
  }


  onQuantityChange(event: any) {
    if (this.newProduct.qty < 0) {
      this.newProduct.qty = 1;
    }
  }

  isLessThan99(value: number): boolean {
    if (value != null) {
      return value > 0 && value <= 99;
    }
  }

  checkQuantity(value: number): boolean {
    if (value > 0 && value < 100) {
      return this.products.quantity < value;
    }
  }

  showMessageAndPay() {
    if (this.productList.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Thông báo',
        text: 'Vui lòng thêm sản phẩm',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      this.VNPay()
    }
  }

// save data when reloading page
  loadCustomerData() {
    this.customer.customerName = localStorage.getItem('customerName') || '';
    this.customer.customerPhone = localStorage.getItem('customerPhone') || '';
    this.customer.customerAddress = localStorage.getItem('customerAddress') || '';
    this.customer.customerEmail = localStorage.getItem('customerEmail') || '';
  }

  saveProductData() {
    localStorage.setItem('productName', this.products.productName);
    localStorage.setItem('costPrice', String(this.products.sellingPrice));
    localStorage.setItem('quantity', String(this.products.quantity));
    localStorage.setItem('qty', this.newProduct.qty);
    localStorage.setItem('errorMessage', this.errorMessage);
  }

  loadProductData() {
    this.products.productName = localStorage.getItem('productName') || '';
    this.products.sellingPrice = localStorage.getItem('costPrice') ? parseInt(localStorage.getItem('costPrice')) : null;
    this.products.quantity = localStorage.getItem('quantity') ? parseInt(localStorage.getItem('quantity')) : null;
    this.newProduct.qty = localStorage.getItem('qty') ? parseInt(localStorage.getItem('qty')) : null;
    this.errorMessage = localStorage.getItem('errorMessage') || '';
  }

  saveCustomerData() {
    localStorage.setItem('customerName', this.customer.customerName);
    localStorage.setItem('customerPhone', this.customer.customerPhone);
    localStorage.setItem('customerAddress', this.customer.customerAddress);
    localStorage.setItem('customerEmail', this.customer.customerEmail);
  }


}
