import {Component, OnInit} from '@angular/core';
import {HomePageService} from '../../service/home-page.service';
import {MatDialog} from '@angular/material/dialog';
import {PhoneDetailsComponent} from '../phone-details/phone-details.component';
import {PhoneDataService} from '../../service/phone-data.service';
import {SharedDataService} from '../../service/shared-data.service';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    products: any[];
    currentPage: number = 1;
    itemsPerPage: number = 8;


    constructor(private dialog: MatDialog, private phoneDataService: PhoneDataService, private homePageService: HomePageService,
                private sharedDataService: SharedDataService) {
    }

    ngOnInit() {
        this.homePageService.getProducts().subscribe((data) => {
            this.products = data;
        });
        this.sharedDataService.searchResults$.subscribe(results => {
            this.products = results;
        });
    }

    openDetailsModal(phone: any) {
        this.phoneDataService.setPhoneDetails(phone);

        this.dialog.open(PhoneDetailsComponent);
    }

    formatCurrency(value) {

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    getPaginatedProducts() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.products.slice(startIndex, endIndex);
    }

    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    goToNextPage() {
        const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
        }
    }

    canGoToPreviousPage(): boolean {
        return this.currentPage > 1;
    }

    canGoToNextPage(): boolean {
        const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
        return this.currentPage < totalPages;
    }
}

