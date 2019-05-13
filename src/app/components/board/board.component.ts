import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/data-source/seed/seed';
import { SquareMap } from 'src/app/models/map/square-map';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';

import { ItemType } from 'src/app/models/enums/item-type';
import { Backpack } from 'src/app/models/item/backpack.item';
import { IContainerService } from 'src/app/services/container.service';
import { Weapon } from 'src/app/models/item/weapon.item';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { MageFactory } from 'src/app/data-source/factories/hero/mage.factory';
import { IContainerHandlerService } from 'src/app/services/container-handler.service';
import { Mage } from 'src/app/models/hero/mage';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let seed: Seed = new Seed(new DigitGenerator());
    let map: SquareMap = seed.seedMap();
    let itemRepo: ItemRepository = new ItemRepository();
    seed.seedData(itemRepo);

    let backpack: Backpack = itemRepo.getBackpacks()[0];
    let weapons: Weapon[] = itemRepo.getWeapons();
    let clothing: ClothingPart[] = itemRepo.getClothingParts();
    
    let hero: Mage = new MageFactory(new DigitGenerator()).create("Johny Bravo",10);
    
    let containerService: IContainerService = new IContainerService();
    let equipmentService = new IContainerHandlerService(containerService);
    
    equipmentService.addContainerToHandler(backpack,hero);
    equipmentService.addItemsToContainer(weapons,hero);
    
    console.log(hero);
  }

}
