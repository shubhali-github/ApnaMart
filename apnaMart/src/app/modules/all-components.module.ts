import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { BannerThreeComponent } from 'src/app/layouts/banner-three/banner-three.component';
import { ContactUsComponent } from 'src/app/layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from 'src/app/layouts/banner-two/banner-two.component';
import { BooksComponent } from 'src/app/products/books/books.component';
import { LaptopsComponent } from 'src/app/products/laptops/laptops.component';
import { PensComponent } from 'src/app/products/pens/pens.component';
import { PageNotFoundComponent } from 'src/app/layouts/page-not-found/page-not-found.component';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { MotoComponent } from 'src/app/products/mob-part/moto/moto.component';
import { SamsungComponent } from 'src/app/products/mob-part/samsung/samsung.component';


@NgModule({
  declarations: [
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    BooksComponent,
    LaptopsComponent,
    PensComponent,
    PageNotFoundComponent,
    HomeComponent,
    MotoComponent,
    SamsungComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    BooksComponent,
    LaptopsComponent,
    PensComponent,
    PageNotFoundComponent,
    HomeComponent,
    MotoComponent,
    SamsungComponent,
  ],
})
export class AllComponentsModule {}
