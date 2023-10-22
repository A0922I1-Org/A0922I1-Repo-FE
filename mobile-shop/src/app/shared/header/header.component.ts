import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import jwtDecode from "jwt-decode";
import {tokenStorageService} from "../../model/security/service/token-storage.service";
import {Router} from "@angular/router";
import {EmployeeService} from "../../model/user-detail/service/infor-user.service";
import {shareService} from "../../model/security/service/share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username: any;
  currentUser: string;
  role = '';
  returnUrl: string;

  constructor(private tokenStorageService: tokenStorageService,
              private shareService: shareService,
              private router: Router,
              private employeeService: EmployeeService) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }
  ngOnInit(): void {
    this.loadHeader();
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser();
      this.role = this.tokenStorageService.getRole();
      this.username = this.tokenStorageService.getUser();
    }
    this.isLoggedIn = this.username != null;
    console.log(`Role hien tai la ${this.role}`);
  }

  logOut() {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }


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


  openThis() {
    this.router.navigate(['/login']);
  }
}
