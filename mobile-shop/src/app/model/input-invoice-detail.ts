import {Product} from "./product";
import {InputInvoice} from "./input-invoice";

export interface InputInvoiceDetail {
  amount: number;
  inputInvoiceCost: number;
  inputInvoice: InputInvoice;
  product: Product;
}
