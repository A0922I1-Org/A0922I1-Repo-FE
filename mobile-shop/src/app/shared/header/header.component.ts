import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';
import { SharedDataService } from '../../service/shared-data.service';
import {NavigationEnd, Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  showSearchInput: boolean;
  constructor(private searchService: SearchService, private sharedDataService: SharedDataService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/'
        if (event.url === '/') {
          this.showSearchInput = true;
        } else {
          this.showSearchInput = false;
        }
      }
    });
  }
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
