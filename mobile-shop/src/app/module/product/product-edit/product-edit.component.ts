import {Component, OnInit} from '@angular/core';
import {Brand} from '../../../model/brand';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: any;
  brandList: Brand;
  validation_messages: any;
  isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {

  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 9b58246c0951743c559070c7ad3e313f28391353

  showPreview($event: Event) {
    
  }
<<<<<<< HEAD
=======
  showPreview() {}
>>>>>>> main
=======

>>>>>>> 9b58246c0951743c559070c7ad3e313f28391353
}
