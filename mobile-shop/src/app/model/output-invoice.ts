import {Customer} from "./customer";

export interface OutputInvoice {
  paymentMethod: string;
  totalPrice: number;
  dateOutputInvoice: Date;
  customer: Customer;
}
