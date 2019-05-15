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
import { MovementService } from 'src/app/services/movement.service';
import { Directions } from 'src/app/utilities/directions';
import { Warrior } from 'src/app/models/hero/warrior';
import { WarriorFactory } from 'src/app/data-source/factories/hero/warrior.factory';
import { Point } from 'src/app/models/map/point';
import { QuadrantDirectionsEnum } from 'src/app/models/enums/quadrant-directions';
import { OctileDirectionsEnum } from 'src/app/models/enums/octile-direction';
import { MapTileStatus } from 'src/app/models/enums/map-tile-status';

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

    let hero: Warrior = new WarriorFactory(new DigitGenerator(), new EquipmentFactory()).create("JohnyBravo",1);

    let movementService: MovementService = new MovementService(new Directions());
    movementService.placeOnMap(hero,map,new Point(0,0));
    movementService.octileMove(hero, map, OctileDirectionsEnum.S);
    movementService.octileMove(hero, map, OctileDirectionsEnum.E);
    movementService.octileMove(hero, map, OctileDirectionsEnum.NW);
    
    map.logMapToConsole();
  }
}
