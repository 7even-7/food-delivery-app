import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodComponent } from './food/food.component';
import { GestureComponent } from './gesture/gesture.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
const routes: Routes = [
    { path: '', component: HomePageComponent},
    {path:'home', component:HomePageComponent},
    {path: "checkout", component:CheckoutComponent},
    {path: "menu", component:FoodComponent},
    {path: 'slideshow', component:SlideShowComponent},
    {path: "gesture", component:GestureComponent},
    {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
