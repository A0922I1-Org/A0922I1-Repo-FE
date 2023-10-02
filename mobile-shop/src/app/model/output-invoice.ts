import {Customer} from "./customer";

export interface OutputInvoice {
  paymentMethod: string;
  totalPrice: number;
  customer: Customer;
}
