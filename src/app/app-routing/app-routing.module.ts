import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from '../components/hero-details/hero-details.component';
import { HeroFormComponent } from '../components/hero-form/hero-form.component';
import { ShopComponent } from '../components/shop/shop.component';
import { BoardComponent } from '../components/board/board.component';
const routes: Routes = [
  {path: '', redirectTo: '/board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent},
  {path: 'hero', component: HeroDetailsComponent},
  {path: 'hero-form', component: HeroFormComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
