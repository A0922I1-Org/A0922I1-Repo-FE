import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {AppModule} from "../app.module";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {ImageScrollComponent} from "./image-scroll/image-scroll.component";
import {PhoneDetailsComponent} from "./phone-details/phone-details.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomePageComponent,
    BodyComponent,
    ImageScrollComponent,
    PhoneDetailsComponent],
    imports: [
        CommonModule,
      RouterModule
    ]
})
export class SharedModule { }
