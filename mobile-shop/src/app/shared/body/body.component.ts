import {Component, OnInit} from '@angular/core';
import {HomePageService} from "../../service/home-page.service";
import {MatDialog} from '@angular/material/dialog';
import {PhoneDetailsComponent} from '../phone-details/phone-details.component';
import {PhoneDataService} from "../../service/phone-data.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  products: any[];

  constructor(private dialog: MatDialog, private phoneDataService: PhoneDataService, private homePageService: HomePageService) {
  }

  ngOnInit() {
    this.homePageService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openDetailsModal(phone: any) {
    this.phoneDataService.setPhoneDetails(phone);

    this.dialog.open(PhoneDetailsComponent);
  }
  formatCurrency(value) {

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
