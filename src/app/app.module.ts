import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotationsComponent } from './layout/components/quotations/quotations.component';
import { QuotationComponent } from './layout/components/quotations/quotation/quotation.component';
import { QuotationInputComponent } from './layout/components/quotations/quotation-input/quotation-input.component';
import { QuotationButtonComponent } from './layout/components/quotations/shared/quotation-button/quotation-button.component';
import { HeaderComponent } from './shared/components/headers/header/header.component';
import { HeaderLogoComponent } from './shared/components/headers/header-logo/header-logo.component';
import { HeadersComponent } from './shared/components/headers/headers.component';
import { HeaderMenuComponent } from './shared/components/headers/header-menu/header-menu.component';
import { HeaderMenuItemComponent } from './shared/components/headers/header-menu-item/header-menu-item.component';
import { FootersComponent } from './shared/components/footers/footers.component';
import { FooterComponent } from './shared/components/footers/footer/footer.component';
import { FooterColumnComponent } from './shared/components/footers/footer-column/footer-column.component';
import { FooterColumnTitleComponent } from './shared/components/footers/footer-column-title/footer-column-title.component';
import { FooterColumnDetailComponent } from './shared/components/footers/footer-column-detail/footer-column-detail.component';
import { FooterColumnlastComponent } from './shared/components/footers/footer-columnlast/footer-columnlast.component';
import { FooterColumnlastImagesComponent } from './shared/components/footers/footer-columnlast-images/footer-columnlast-images.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotationsComponent,
    QuotationComponent,
    QuotationInputComponent,
    QuotationButtonComponent,
    HeaderComponent,
    HeaderLogoComponent,
    HeadersComponent,
    HeaderMenuComponent,
    HeaderMenuItemComponent,
    FootersComponent,
    FooterComponent,
    FooterColumnComponent,
    FooterColumnTitleComponent,
    FooterColumnDetailComponent,
    FooterColumnlastComponent,
    FooterColumnlastImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
