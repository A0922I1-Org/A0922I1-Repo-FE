// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore
import { CarouselModule } from 'ngx-owl-carousel-o';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// @ts-ignore
import {HttpClientModule} from "@angular/common/http";
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BodyComponent} from './homepage/body/body.component';
import {FooterComponent} from './homepage/footer/footer.component';
import {HeaderComponent} from './homepage/header/header.component';
import {ImageScrollComponent} from './homepage/image-scroll/image-scroll.component';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    ImageScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
