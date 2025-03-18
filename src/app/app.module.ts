import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { AppRoutingModule } from './app-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { HeaderShopComponent } from './components/header-shop/header-shop.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { FooterComponent } from './components/footer/footer.component';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HeaderShopComponent,
    ViewProductsComponent,
    ViewTicketComponent,
    FooterComponent
  ],
  imports: [
    MenuModule,
    MenubarModule,
    GalleriaModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    InputNumberModule,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    TooltipModule

  ],
  providers: [
    PrimeIcons
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
