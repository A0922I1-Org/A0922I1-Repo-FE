import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {SearchService} from '../../service/search.service';
import { SharedDataService } from '../../service/shared-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  constructor(private searchService: SearchService, private sharedDataService: SharedDataService) { }
  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  ngOnInit(): void {
  }
  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.searchService.search(this.searchQuery).subscribe(results => {
        this.sharedDataService.updateSearchResults(results);
      });
    }
  }
}
