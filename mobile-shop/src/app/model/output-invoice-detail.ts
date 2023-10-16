import {Product} from './product';
import {OutputInvoice} from './output-invoice';

export interface OutputInvoiceDetail {
  quantity: number;
  subTotal: number;
  product: Product;
  outputInvoice: OutputInvoice;
}
