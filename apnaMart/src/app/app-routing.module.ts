import { ProductViewComponent } from './products/product-view/product-view.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { PensComponent } from './products/pens/pens.component';
import { BooksComponent } from './products/books/books.component';
import { SamsungComponent } from './products/mob-part/samsung/samsung.component';
import { MotoComponent } from './products/mob-part/moto/moto.component';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { MobileNavComponent } from './products/mob-part/mobile-nav/mobile-nav.component';
import { HomeComponent } from './layouts/home/home.component';
import { LapiDetailsComponent } from './products/laptops/lapi-details/lapi-details.component';
import { LapiOfferComponent } from './products/laptops/lapi-offer/lapi-offer.component';
import { CartItemComponent } from './products/cart/cart-item/cart-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'mobile',
    component: MobileNavComponent,
    children: [
      { path: '', component: MobPartComponent },
      {
        path: 'moto',
        component: MotoComponent,
      },
      {
        path: 'sam',
        component: SamsungComponent,
      },
    ],
  },
  { path: 'books', component: BooksComponent },

  { path: 'lapi', component: LaptopsComponent },
  {
    path: 'lapiDetails',
    component: LapiDetailsComponent,
    outlet: 'outlet1',
  },
  {
    path: 'lapiOffers',
    component: LapiOfferComponent,
    outlet: 'outlet2',
  },
  //here we are define outlet by using this outlet we can access this component
  { path: 'pen', component: PensComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'lazy',
    loadChildren: '../modules/lazy/lazy.module#LazyModule',
  },
  { path: 'temp', component: TemplateFormComponent },
  { path: 'react', component: ReactiveFormComponent },
  //product-view routing
  {path:'product-view/:prodObj',component:ProductViewComponent},
  { path: 'cart-item', component: CartItemComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
