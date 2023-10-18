import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import { SharedDataService } from '../../service/shared-data.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  constructor(private searchService: SearchService, private sharedDataService: SharedDataService) { }
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
