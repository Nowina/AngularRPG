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
import { Equipment } from 'src/app/models/other/equipment';
import { IEquipmentService } from 'src/app/services/equipment.service';
import { EquipmentFactory } from 'src/app/data-source/factories/other/equipment.factory';

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

    let hero = new MageFactory(new DigitGenerator(), new EquipmentFactory()).create("Johny Bravo", 10);

    let equipment: Equipment = hero.equipment;
    let equipmentService: IEquipmentService = new IEquipmentService();
    let containerHandlerService: IContainerHandlerService = new IContainerHandlerService(new IContainerService());

    equipmentService.addItemToEquipment(backpack, equipment);
    equipmentService.addItemToEquipment(clothing[0], equipment);

    containerHandlerService.addItemToContainer(weapons[1], equipment);
    console.log(equipment);

    equipmentService.removeFromEquipment(backpack,equipment);


  }

}
