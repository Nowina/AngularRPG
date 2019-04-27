import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ShopComponent } from './shop/shop.component';
const routes: Routes = [
  {path: 'hero', component: HeroDetailsComponent},
  {path: 'hero-form', component: HeroFormComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
