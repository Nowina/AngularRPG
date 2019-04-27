import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemFormComponent } from './shop-item-form/shop-item-form.component';
import { ShopItemDetailsComponent } from './shop-item-details/shop-item-details.component';
import { ShopItemListComponent } from './shop-item-list/shop-item-list.component';

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
