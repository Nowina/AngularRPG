import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroComponent } from './components/hero-details/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemFormComponent } from './components/shop-item-form/shop-item-form.component';
import { ShopItemDetailsComponent } from './components/shop-item-details/shop-item-details.component';
import { ShopItemListComponent } from './components/shop-item-list/shop-item-list.component';
import { KeyboardListener } from './directives/keyboard-listener.directive';
import { MapTileComponent } from './components/map-tile/map-tile.component'
import { Seed } from './data-source/seed/seed';
import { ItemRepository } from './data-source/repositories/item-repository';
import { EquipmentFactory } from './data-source/factories/other/equipment.factory';
import { BackpackFactory } from './data-source/factories/item/backpack.factory';
import { ClothingFactory } from './data-source/factories/item/clothing.factory';
import { WeaponFactory } from './data-source/factories/item/weapon.factory';
import { MageFactory } from './data-source/factories/hero/mage.factory';
import { RogueFactory } from './data-source/factories/hero/rogue.factory';
import { WarriorFactory } from './data-source/factories/hero/warrior.factory';
import { IContainerHandlerService } from './services/container-handler.service';
import { IContainerService } from './services/container.service';
import { IEquipmentService } from './services/equipment.service';
import { MovementService } from './services/movement.service';
import { DigitGenerator } from './utilities/digit-generator';
import { HeroRepository } from './data-source/repositories/hero-repository';
import { DataTablesModule } from 'angular-datatables';
import { EquipmentListComponent } from './components/hero-details/equipment-list/equipment-list.component';
import {BackpackItemsListComponent} from "./components/hero-details/backpack-items-list/backpack-items-list.component";
import { HeroInfoComponent } from './components/hero-details/hero-info/hero-info.component';
import { ItemDetailsComponent } from './components/hero-details/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeroFormComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ShopComponent,
    ShopItemFormComponent,
    ShopItemDetailsComponent,
    ShopItemListComponent,
    KeyboardListener,
    MapTileComponent,
    EquipmentListComponent,
    BackpackItemsListComponent,
    HeroInfoComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [
    {provide: Seed, useClass: Seed},
    {provide: ItemRepository, useClass: ItemRepository},
    {provide: EquipmentFactory, useClass: EquipmentFactory},
    {provide: BackpackFactory, useClass: BackpackFactory},
    {provide: ClothingFactory, useClass: ClothingFactory},
    {provide: WeaponFactory, useClass: WeaponFactory},
    {provide: MageFactory, useClass: MageFactory},
    {provide: RogueFactory, useClass: RogueFactory},
    {provide: WarriorFactory, useClass: WarriorFactory},
    {provide: IContainerHandlerService, useClass: IContainerHandlerService},
    {provide: IContainerService, useClass: IContainerService},
    {provide: IEquipmentService, useClass: IEquipmentService},
    {provide: MovementService, useClass: MovementService},
    {provide: DigitGenerator, useClass: DigitGenerator},
    {provide: HeroRepository, useClass: HeroRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
