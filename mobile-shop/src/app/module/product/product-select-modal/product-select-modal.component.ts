import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductServiceService} from '../../../service/serviceProduct/product-service.service';
import {Product} from '../../../model/product';
import {Page} from '../../../model/page';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-select-modal.component.html',
  styleUrls: ['./product-select-modal.component.css']
})
export class ProductSelectModalComponent implements OnInit, OnChanges {
  products: Product [];
  product: Product;
  option: string;
  page: Page<Product>;
  @Output() productEmitted = new EventEmitter<Product>();
  @Input() reload: boolean;
  constructor(private productServiceService: ProductServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.reload && this.reload) {
      this.getListProduct(0);
    }
  }
  ngOnInit(): void {
    this.getListProduct(0);
  }

  getListProduct(pageNo: number) {
    this.productServiceService.listProduct(pageNo).subscribe(data => {
      this.products = data.content;
      this.page = data;
      console.log(data);
    });

  }
  findByIdProduct(id: number) {
    this.productServiceService.findById(id).subscribe(data => {
      this.product = data;
      this.productEmitted.emit(this.product);
      console.log(data);
    });
  }


  searchProduct(search: HTMLInputElement, storage: HTMLInputElement) {
    if (this.option === null && search.value === null && storage.value === null) {
      this.ngOnInit();
      console.log(this.ngOnInit());
    } else {
      this.productServiceService.search(this.option, search.value, storage.value).subscribe(next => {
        this.products = next.content;
        this.page = next;
        console.log(next);
      });
    }
  }
}
