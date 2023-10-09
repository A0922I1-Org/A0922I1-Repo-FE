import {ProductInputDto} from "./ProductInputDto";
import {Supplier} from "../model/supplier";

export class InputInvoiceDto {
  private _productInputDto: ProductInputDto[];
  private _supplier: Supplier;


  constructor(productInputDto: ProductInputDto[], supplier: Supplier) {
    this._productInputDto = productInputDto;
    this._supplier = supplier;
  }

  get productInputDto(): ProductInputDto[] {
    return this._productInputDto;
  }

  set productInputDto(value: ProductInputDto[]) {
    this._productInputDto = value;
  }

  get supplier(): Supplier {
    return this._supplier;
  }

  set supplier(value: Supplier) {
    this._supplier = value;
  }
}
