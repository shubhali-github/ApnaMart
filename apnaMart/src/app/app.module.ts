import { HttpPostsComponent } from './components/http-posts/http-posts.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase-config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { HostDirective } from './directives/host.directive';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavComponent } from './layouts/nav/nav.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { ProductsComponent } from './layouts/products/products.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { BooksComponent } from './products/books/books.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { PensComponent } from './products/pens/pens.component';
import { MotoComponent } from './products/mob-part/moto/moto.component';
import { SamsungComponent } from './products/mob-part/samsung/samsung.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyComponent } from './modules/lazy/lazy.component';
import { LazyTwoComponent } from './modules/lazy/lazy-two/lazy-two.component';
import { MobileNavComponent } from './products/mob-part/mobile-nav/mobile-nav.component';
import { ComServic } from './services/com-servic.service';
import { AuthGuard } from './guards/auth.guard';
import { AllMaterialModule } from './modules/all-material.module';
import { AllDirectivesModule } from './modules/all-directives.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LapiDetailsComponent } from './products/laptops/lapi-details/lapi-details.component';
import { LapiOfferComponent } from './products/laptops/lapi-offer/lapi-offer.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ParentComponent } from './products/parent/parent.component';
import { ChildComponent } from './products/child/child.component';
import { CartItemComponent } from './products/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    SimpleStyleDirective,
    HostDirective,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    ProductsComponent,
    SqrtPipe,
    BooksComponent,
    LaptopsComponent,
    MobPartComponent,
    PensComponent,
    MotoComponent,
    SamsungComponent,
    LazyComponent,
    LazyTwoComponent,
    MobileNavComponent,
    LapiDetailsComponent,
    LapiOfferComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ProductViewComponent,
    ParentComponent,
    ChildComponent,
    CartItemComponent,
    HttpPostsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllDirectivesModule,
    HttpModule,
    AllMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ComServic, AuthGuard],
 bootstrap: [AppComponent],
  //bootstrap: [HttpPostsComponent ]

})
export class AppModule {}
