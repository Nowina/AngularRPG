import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from '../components/hero-details/hero.component';
import { HeroFormComponent } from '../components/hero-form/hero-form.component';
import { ShopComponent } from '../components/shop/shop.component';
import { BoardComponent } from '../components/board/board.component';
const routes: Routes = [
  {path: '', redirectTo: '/board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'hero-form', component: HeroFormComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
