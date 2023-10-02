import {Product} from "./product";
import {InputInvoice} from "./input-invoice";

export interface InputInvoiceDetail {
  inputInvoiceCost: number;
  amount: number;
  product: Product;
  inputInvoice: InputInvoice;
}
