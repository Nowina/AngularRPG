import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemFormComponent } from './components/shop-item-form/shop-item-form.component';
import { ShopItemDetailsComponent } from './components/shop-item-details/shop-item-details.component';
import { ShopItemListComponent } from './components/shop-item-list/shop-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeroFormComponent,
    HeroDetailsComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ShopComponent,
    ShopItemFormComponent,
    ShopItemDetailsComponent,
    ShopItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
