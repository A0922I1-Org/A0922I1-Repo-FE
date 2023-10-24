import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import {SharedDataService} from '../../service/shared-data.service';
import {NavigationEnd, Router} from '@angular/router';
import {tokenStorageService} from "../../model/security/service/token-storage.service";
import {shareService} from "../../model/security/service/share.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //phan quyen
  userRole: string;
  username: string;
  isLoggedIn = false;

  searchQuery: string = '';
  showSearchInput: boolean;

  constructor(private searchService: SearchService, private sharedDataService: SharedDataService, private router: Router,
              private authorize: tokenStorageService,
              private share: shareService) {
//phan quyen
//     this.userRole = this.authorize.getRole().authority;
    this.share.getClickEvent().subscribe(() => {
      this.loadHeader()
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/'
        if (event.url === '/') {
          this.showSearchInput = true;
        } else {
          this.showSearchInput = false;
        }
      }
    })
  }


  loadHeader() {
    if (this.authorize.getToken()) {
      this.userRole = this.authorize.getRole().authority;
      this.username = this.authorize.getName();
      console.log(this.username);
      console.log("role hien tai la " + this.userRole);
    }
    this.isLoggedIn = this.username != null
  }

  ngOnInit(): void {
    this.loadHeader();
  }

  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.searchService.search(this.searchQuery).subscribe(results => {
        this.sharedDataService.updateSearchResults(results);
      });
    }
  }

  logOut() {
    this.authorize.signOut();
    location.reload();
  }
}
