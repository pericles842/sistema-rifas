import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderShopComponent } from './components/header-shop/header-shop.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { WebRifasComponent } from './web-rifas/web-rifas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderShopComponent,
    ViewProductsComponent,
    ViewTicketComponent,
    FooterComponent,
    PaymentDetailsComponent,
    SignUpComponent,
    SignInComponent,
    WebRifasComponent
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
    TooltipModule,
    CarouselModule

  ],
  providers: [
    PrimeIcons
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
