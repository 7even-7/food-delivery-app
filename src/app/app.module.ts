import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
import { FoodComponent } from './food/food.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ProductComponent } from './product/product.component';
import { GestureComponent } from './gesture/gesture.component';
import { AboutComponent } from './about/about.component';
//import { AppNavbarComponent } from './app-navbar/app-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomePageComponent,
    HandtrackerComponent,
    FoodComponent,
    CheckoutComponent,
    NavbarComponent,
    SlideShowComponent,
    ProductComponent,
    GestureComponent,
    AboutComponent,
    // AppNavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
