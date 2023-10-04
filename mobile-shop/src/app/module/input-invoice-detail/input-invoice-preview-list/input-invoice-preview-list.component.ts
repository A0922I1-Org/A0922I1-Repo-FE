import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductInputDto} from "../../../dto/ProductInputDto";

@Component({
  selector: 'app-input-invoice-preview-list',
  templateUrl: './input-invoice-preview-list.component.html',
  styleUrls: ['./input-invoice-preview-list.component.css']
})
export class InputInvoicePreviewListComponent implements OnInit, OnChanges {
  @Input() item: ProductInputDto;
  previewListInputItem: ProductInputDto[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item && this.item){
      console.log(this.item);
      this.previewListInputItem.push(this.item);
    }
  }

  dropItem(itemIndex: number){
    this.previewListInputItem.splice(itemIndex,1);
  }

}
